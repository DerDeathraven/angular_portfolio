import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  START_PROGRAMING = 2011
  @Input() skill:any
  leftWidth:number = 0
  rightWidth:number = 100
  yearArr:Array<any> = []
  currentYear:number =  new Date().getFullYear();
  timelineScaleFactor:number = 0

  constructor() {


   }

  ngOnInit(): void {
    this.generateYearArray();
    this.calcWidth();
  }
  calcWidth():void {
    var startYear =  this.skill.startDate;

    var maxYear = this.currentYear - this.START_PROGRAMING

    this.leftWidth = (startYear - this.START_PROGRAMING)/maxYear*100
    this.rightWidth = 100-this.leftWidth


  }
  generateYearArray(){
    var maxYear = this.currentYear - this.START_PROGRAMING
    for(var i = 0; i <= maxYear; i++){
      var render = false

      switch(true){
        case this.START_PROGRAMING+i == this.skill.startDate:
        case this.START_PROGRAMING+i == this.currentYear:
        case this.START_PROGRAMING+i == this.START_PROGRAMING:
          render = true;
          break;
      }
      var yearObj = {
        year: this.START_PROGRAMING+i,
        render,
      }
      this.yearArr.push(yearObj)
    }


    if(this.skill.startDate == this.currentYear - 1){
      this.yearArr.at(-1).render = false
    }
    this.timelineScaleFactor = 100/maxYear


  }

}
