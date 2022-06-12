import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {

  age = this.calcAge();

  constructor() { }

  ngOnInit(): void {

  }
  calcAge():number{
    var time = new Date()
    return time.getFullYear() - 2001
  }

}
