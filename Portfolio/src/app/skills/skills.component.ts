import { Component, OnInit,} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],

})
export class SkillsComponent implements OnInit {
  renderBroker = new Subject();
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){

  }

}
