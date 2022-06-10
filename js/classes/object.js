import {Loader} from "loader"
import * as THREE from "three"

export class Object{
    constructor(id,obj){
        
        this.currentDirection = 0;
        this.animframe = 0;

        this.id = id;

        this.position = new THREE.Vector3().copy(obj.position);
        this.velocity = new THREE.Vector3();
        this.forces = [] 
        this.mass = obj.mass

        this.file = obj.file;
        this.flip = false;
        this.counter = 0;
    }
    async loadObject(){
        var me = this
        var retPromise = new Promise(function(resolve, reject){
           Loader.loadObject(me.file).then(o=>{
            o.scale.setScalar(Math.pow(me.mass,3)* 0.0001) 
            o.lookAt(new THREE.Vector3())
            o.position.copy(me.position)
            me.object = o
            resolve()
           })
            
           
        })
      return retPromise
    }
    update(){

        this.animate()
        this.position.add(this.velocity)
        //if(this.position.x > 100) this.position.x = 100;
        //if(this.position.y > 100) this.position.y = 100;
        //if(this.position.z > 100) this.position.z = 100;
        //if(this.position.x < -100) this.position.x = -100;
        //if(this.position.y < -100) this.position.y = -100;
        //if(this.position.z < -100) this.position.z = -100;
        this.forces.forEach(force =>{
            force.z = force.z / this.mass * 10
            force.y = force.y / this.mass * 10
            force.x = force.x / this.mass * 10
            this.velocity.add(force)
        })
        if(this.velocity.z > 3){this.velocity.z = 3}
        if(this.velocity.y > 3){this.velocity.y = 3}
        if(this.velocity.x > 3){this.velocity.x = 3}
   
        
        
        this.object.position.copy(this.position)
        this.blink()
        this.counter++
    }
    mouseEnter(){
        
        // this.currentDirection = 1;
    }
    mouseLeave(){
        
         //this.currentDirection = -1;
    }
    leftClick(){
        this.mass += 1
        this.object.scale.setScalar(Math.pow(this.mass,3)* 0.0001) 
    }
    blink(){
        if(this.position.z % 0.001 == 0){
            if(!this.flip){
                this.object.traverse(function (child) {  
                    if (child instanceof THREE.Mesh) {
                        child.material.color.setHex(0xff8080)
                        
                    }
                });
            }else{
                this.object.traverse(function (child) {  
                    if (child instanceof THREE.Mesh) {
                        child.material.color.setHex(0xFFffff)
                        
                    }
                });
            }

            this.flip = !this.flip
        }
    }
    /**
     * @var {number} durationInSec Geschwindigkeit
     * 
     */
    animate(){

        //-----------------------
        let durationInSec = 0.10;
        //-----------------------

        let mincap = 0;
        let maxcap = durationInSec * 60;
        this.animframe += this.currentDirection;
        if(this.animframe <= mincap) this.animframe = mincap;
        if(this.animframe >= maxcap) this.animframe = maxcap;
        if(this.animframe <= mincap || this.animframe >= maxcap) return;

        let baseScale = 0.02;
        let factor = 0.01;
        let growthFactor = factor/maxcap;
        let growthStage = growthFactor * this.animframe;
        let scale = baseScale + growthStage
        this.object.scale.setScalar(scale);

        
        //this.animframe = this.animframe <= mincap ? mincap:this.animframe >= maxcap ?maxcap: this.animframe








    }
}