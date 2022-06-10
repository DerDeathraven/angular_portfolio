import {OBJLoader} from "obj"
import * as THREE from "three"

export class Loader{
    static async loadObject(file){
        
        var texture = await this.loadTextures(file)
        

         var retPromise = new Promise((resolve, reject) =>{
            var path = `models/${file}/${file}.obj`
            const loader = new OBJLoader();
            


            loader.load(
                path,
                function (object){
                    object.traverse(function (child) {  
                        console.log(child) // aka setTexture
                        if (child instanceof THREE.Mesh) {
                            child.material.map = texture;
                        }
                    });
                    resolve(object);
                 },
                 function(xhr){
                    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                 },
                 function(err){
                     reject(err)
                 }
        )
        })
        return retPromise
    }


    
    static async loadTextures(file){
        const retPromise = new Promise((resolve, reject) =>{
            var path = `models/${file}/${file}.jpg`
            const loader = new THREE.TextureLoader();


            loader.load(
                path,
                function (object){ // onFinsish
                    resolve(object);
                 },
                 function(xhr){ //onLoadUpdate
                   
                 },
                 function(err){ //onError
                     reject(err)
                 }
        )
        })
        return retPromise
    }
}