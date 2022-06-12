import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  @Input() year:any
  @Input() renderBroker:any
  constructor() { }

  ngOnInit(): void {
  }
  updateSkills(relatedSkills:Array<String>){
    relatedSkills = relatedSkills || []
    this.renderBroker.next(relatedSkills)
  }

}
