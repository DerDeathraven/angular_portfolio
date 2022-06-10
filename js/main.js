import * as THREE from "three"
import {ObjectManger} from "objectManager"
import { OrbitControls } from "orbi";
import {UserInputManager} from "userInputManager";
import {InteractionsManager} from "interactionsManager";
import {GUI} from "datGUI"


var scene
var camera
var renderer
var objectManager
var light
var controls 
var gui 

var userInputManager
var interactionsManager
var constante = {
    range: 0
}
var objectJSON = [
    {
        file: "redstone-lamp",
        position: {x: 5, y: 0,z:1},
        mass: 10,
    },
    {
        file: "redstone-lamp",
        position: {x: 0, y: 0,z:-3},
        mass: 3,
    }
]

function fillJSON(count, mass) {  
    for (var i = 0; i < count; i++){
        var massEnd = Math.round(Math.random() * mass)
        if(massEnd==0)massEnd = 1
        var obj = {
            file: "redstone-lamp",
            position: {x:Math.random(), y:Math.random(),z:Math.random()},
            mass: massEnd
        }
        objectJSON.push(obj)
    }

}

fillJSON(1,3)

function init(){
    scene = new THREE.Scene()
    

    light = new THREE.AmbientLight(0xFFFFFF,1) 
    
    scene.add(light)
    



    //camera
    camera = new THREE.PerspectiveCamera( 
    45, //Field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    1, // mindest abstand
    10000 // maximal abstand
    )
    camera.position.z = 5;
    camera.position.y = 4;
    
    userInputManager = new UserInputManager()
    interactionsManager = new InteractionsManager(scene,camera,userInputManager)
    objectManager = new ObjectManger(scene,objectJSON,interactionsManager,userInputManager)

     //renderer -> die "mach-sichtbar-maschiene"
     renderer = new THREE.WebGLRenderer({alpha: true}); 
     renderer.shadowMap.enabled = true; //ob schatten erlaubt sind
     renderer.setSize(window.innerWidth, window.innerHeight)
     document.getElementById("threejsHook").appendChild(renderer.domElement)

     renderer.render(scene,camera)

     gui = new GUI()
     gui.add(constante,"range",-10,10)

     controls =  new OrbitControls(camera, renderer.domElement);
     animate()
}

init()

function animate(){
    controls.update();
    renderer.render(scene,camera)
    objectManager.update(constante.range)
    interactionsManager.update()
    requestAnimationFrame(animate)
}