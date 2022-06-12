import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  @Input() year:any
  @Input() renderBroker:any
  @Input() activeProject:any
  activeProjectName = ""
  constructor() { }

  ngOnInit(): void {
    this.activeProject.subscribe((project:any) =>{
      this.activeProjectName = project;
    })
  }

  updateSkills(relatedSkills:Array<String>,clickedProject:string){

    if(relatedSkills != undefined){
      if(clickedProject == this.activeProjectName){
        this.activeProject.next("")
        this.renderBroker.next([])
      }else{
        this.activeProject.next(clickedProject)
        relatedSkills = relatedSkills || []
        this.renderBroker.next(relatedSkills)
      }
    }



  }

}
