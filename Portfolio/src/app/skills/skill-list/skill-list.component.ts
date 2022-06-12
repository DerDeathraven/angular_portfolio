import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  @Input() renderBroker:any


  skills = [

    {
        "name": "JavaScript",
        "startDate":2011,

    },
    {
        "name":"Unix",
        "startDate":2011,


    },
    {
        "name":"JQuery",
        "startDate":2014,
    },
    {
        "name":"NodeJS",
        "startDate":2019,
    },
    {
        "name":"<HTML/CSS>",
        "startDate":2011,
    },
    {
        "name":"Bash/Batch",
        "startDate":2014,


    },
    {
        "name": "Socket.io",
        "startDate":2020,

    },
    {
        "name":"Three.js",
        "startDate":2021,
    },

    {
        "name":"ROS",
        "startDate":2021,
    },


    ]
  shownSkills = this.skills
  constructor() { }

  ngOnInit(): void {
    this.renderBroker.subscribe((v:Array<String>)=>{
      this.rerenderSkills(v)
    })
  }
  rerenderSkills(v:Array<String>):void {
    if(v.length > 0) {
      var retSkills:Array<any> = []
      this.skills.forEach((sk)=>{
      if(v.indexOf(sk.name)!==-1) retSkills.push(sk)
    })
    this.shownSkills = retSkills
    }else{
    this.shownSkills = this.skills
    }

  }
}
