import { Component, OnInit, Input } from '@angular/core';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() renderBroker:any
  activeProject = new Subject()
  defaultYears = [
    {
    year: 2014,
   "projects":[
        {
         name: '"Junior" Sys-Admin',
         github: "https://wp.schloss-rohlstorf.de/",
         githubSymbole: '<i class="fa-brands fa-fort-awesome-alt"></i>',
         content: "Growing up with a web-developer mom lead to me being fluid with OSX at the age of 13. This I used to administrate the macbooks used by my school.",
         picture: "https:/jlcd.de/images/Gut_Rohlstorf_Herrenhaus.jpg",
        releatedSkills:[
            "Bash/Batch",
            "Unix"
        ]

        },


    ]
},
{
    year: 2016,
    "projects":[
         {
          name: " Honorary Award",
          github: "https://wp.schloss-rohlstorf.de/",
          content: "In recognition of my duties as a system administrator for all the OSX devices in our school. As well as being a role-model for other students",
          githubSymbole:" ",
          picture: "https:/jlcd.de/images/eherenmarke.jpeg"
         },
         {
            name: "First batch chat",
            github: "https://github.com/DerDeathraven/Batchchat",
            content: "Developing a basic knowledge of programming in my early years and the need for a teacher free chat in school, ended in me and my friend building a chat with batch as a backend",
            picture: "https:/jlcd.de/images/old_batchchat.png",
            releatedSkills:[
                "Bash/Batch",
            ]
            },

     ]
 },
{
    year:  2017,
    "projects":[
         {
          name: "MSA",
          github: "https://www.basses-blatt.de/newsreader-aktuelles/esa-und-msa-in-rohlstorf.html",
          content: "Graduating as best in class with a GPA of 1.6",
          githubSymbole:'<i class="fa-solid fa-graduation-cap"></i>',
          picture: "https:/jlcd.de/images/msa.jpg"
         },

     ]
 },
 {
    year:2018,
    "projects":[
         {
          name: "Final batch chat",
          github: "https://github.com/DerDeathraven/Batchchat",
          content: "Using my new developed skill in web-development, I wanted to redo my chat program. I used a HTML frontend to smooth up the user experience.",
          picture: "https:/jlcd.de/images/Batchchat.png",
          releatedSkills:[
            "Bash/Batch",
            "JavaScript",
            "<HTML/CSS>",
        ]
         },
         {
            name: "Family business",
            github: "https://www.webspezi.com/de/",
            content: "Starting to work for my mom. Work such as: on-side customer service, setting up maschines, training with elderly",
            githubSymbole: '<i class="fa-solid fa-link"></i>',
            picture: "https:/jlcd.de/images/20_Jahre_webspezi.png"
         }


     ]
 },

{
    year:  2021,
    "projects":[
         {
          name: "Art Collection",
          github: "https://kunst.breede.sh/kunstwerke/0",
          content: "A school project in which I took on me the role of managment and keeping the big picture. ",
          githubSymbole:'<i class="fa-solid fa-link"></i>',
          picture: "https:/jlcd.de/images/bbz.png"
         },
         {
            name: " Abitur ",
            github: "http://www.bbz-se.de/verabschiedung-der-abiturientinnen/",
            content: "A technical school simlar to college. This school allowed to choose a main course out of various classes. This course was part of the Abitur exams. I chose environment development",
            githubSymbole:'<i class="fa-solid fa-graduation-cap"></i>',
            picture: "https:/jlcd.de/images/BG-T18.jpg"
        },
         {
            name: "IT-Security",
            github: "https://www.uni-luebeck.de/universitaet/universitaet.html",
            content: "Starting my studies and extending my knowledge of JS in the background",
            githubSymbole:'<i class="fa-solid fa-link"></i>',
            picture: "https:/jlcd.de/images/csm_Eingang-UNI-Studenten_CORP_Rene-Kube_IMG_6016_neu_97e9451734.jpg"
        },



     ]
 },
 {
    year: 2022,
    "projects":[
        {
            name: "Hako",
            github: "https://www.hako.com/en/",
            content: "Working on robotic sweepingmaschines. Being treated as a full member and not a intern right alongside senior-devs",
            githubSymbole:'<i class="fa-solid fa-link"></i>',
            picture: "https:/jlcd.de/images/Termine_Header.jpg",
        },
        {
            name: "StreamPipe",
            github: "https://www.hako.com/en/",
            content: "Developing a full-fledged ROS-Bag analytic-suite. Marking Timestamps, Adding comments and exporting them as PDF. Built with Nodejs and Socket.io.",
            githubSymbole:'<i class="fa-solid fa-lock"></i>',
            picture: "https:/jlcd.de/images/csm_Eingang-UNI-Studenten_CORP_Rene-Kube_IMG_6016_neu_97e9451734.jpg",
            releatedSkills:[
                "NodeJS",
                "JavaScript",
                "<HTML/CSS>",
                "Socket.io",
                "JQuery",
                "ROS"
            ]
        },
        {
            name: "Threejs Smarthome",
            github: "https://github.com/DerDeathraven/threejs_smarthome_control",
            content: "This NodeJS Project uses MQTT and Socket.io to render the status of your smarthome devices in realtime and 3D",
            picture: "https:/jlcd.de/images/screenshot_Smarthome.png",
            releatedSkills:[
                "NodeJS",
                "JavaScript",
                "<HTML/CSS>",
                "Socket.io",
                "JQuery",
            ]
        },



     ]
 },
 {
    year: "Portfolio",
    "projects":[
        {
            name: "Stable Portfolio",
            github: "https://github.com/DerDeathraven/jlcd",
            content: "My spin on a modern website similar to what you can find on many websites. This time build with Angular",
            picture: "https:/jlcd.de/images/schonwieder_ich.JPG",
            releatedSkills:[
                "JavaScript",
                "<HTML/CSS>",
                "JQuery",
                "Angular"
            ]
           },
           {
            name: "Experimental Portfolio",
            github: "https://github.com/DerDeathraven/jlcd",
            content: "Using Three.js and CSS3D. This developed out of a weekend of learning 3D programming inside of a browser.",
            picture: "https:/jlcd.de/images/Bewerbungsfoto.jpg",
            releatedSkills:[
                "JavaScript",
                "<HTML/CSS>",
                "JQuery",
                "Three.js"
            ]
           },


     ]
 },
   ]
  leftMover:number = 0
  years = this.defaultYears
  constructor() { }

  ngOnInit(): void {
    this.activeProject.next("")
  }
  moveViewport(event:any,containerWidth:number,viewportWidth:number){
   var value   = event.target.value / 100;
   this.leftMover = -(value*(containerWidth-viewportWidth))


  }


}
