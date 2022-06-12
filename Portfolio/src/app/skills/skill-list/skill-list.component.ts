import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
