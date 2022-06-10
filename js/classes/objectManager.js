import {Object} from "object"
import * as THREE from "three"
export class ObjectManger{

    /**
     * 
     * @param {*} scene 
     * 
     * 
     */
    constructor(scene,objectJSON,interactionsManager,userInputManager){
        this.objects = [];
        this.interactionsManager = interactionsManager
        this.userInputManager = userInputManager
        this.idCounter = 0
        this.fillObjects(objectJSON);
        this.scene = scene;
        this.renderedAllObjects = false;
        this.loadObjects()
        
        
        
    }
    fillObjects(objectJSON){
        
        objectJSON.forEach(o=>{
            this.objects.push(new Object(this.idCounter++,o));
        })
    }
    loadObjects(){
        var me = this;
        var promises = [];
        this.objects.forEach(o=>{
            promises.push(o.loadObject());
        })
        Promise.all(promises).then(f=>{
            me.render();    
            me.renderedAllObjects = true;
            me.registerMouse()
        }
            
        )
    }
    render(){
        this.objects.forEach(o=>{
            this.scene.add(o.object);
        })
        console.log(this.scene)
    }
    update(constante){
        if(!this.renderedAllObjects) return;


        this.objects.forEach((o,i)=>{
            if(i!=0) {
            var forces = [];
            this.objects.forEach(p=>{
                if(o.id != p.id){
                    var force = new THREE.Vector3()
                    if(o.position.z - p.position.z != 0){

                        let GRAVITATIONAL_CONSTANT = 0.0001;

                        let partOne = (GRAVITATIONAL_CONSTANT * o.mass * p. mass)
                        let partTwo = (o.position.x - p.position.x)
                        
                       

                   

                        force.x = (Math.pow((GRAVITATIONAL_CONSTANT * o.mass * p.mass)/(o.position.x - p.position.x),2)) * Math.sign(o.position.x - p.position.x)
                        force.y = (Math.pow((GRAVITATIONAL_CONSTANT * o.mass * p.mass)/(o.position.y - p.position.y),2)) * Math.sign(o.position.y - p.position.y)
                        force.z = (Math.pow((GRAVITATIONAL_CONSTANT * o.mass * p.mass)/(o.position.z - p.position.z),2)) * Math.sign(o.position.z - p.position.z)
                       
                        
                    }

                    
                   
                    forces.push(force)
                }
            })

            
        
            
            forces.forEach(force => {
                if(force.z > 0.001) force.z = 0.001;
                if(force.z < -0.001) force.z = -0.001;
                if(!isFinite(force.z)) force.z = 1;   
                
                if(force.y > 0.001) force.y = 0.001;
                if(force.y < -0.001) force.y = -0.001;
                if(!isFinite(force.y)) force.y = 1;   

                if(force.x > 0.001) force.x = 0.001;
                if(force.x < -0.001) force.x = -0.001;
                if(!isFinite(force.x)) force.x = 1; 
                
            });
            
             
            o.forces = forces
            o.update()
            }
        })
    }
    registerMouse(){
        console.log("registerMouse")
        this.objects.forEach(o=>{
            this.interactionsManager.add("hover",o)
            this.interactionsManager.add("leftClick",o)
        })
    }
    
}