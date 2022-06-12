import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project:any;

  constructor() { }

  ngOnInit(): void {
    this.project.githubSymbole = this.project.githubSymbole || '<i class="fa-brands fa-github-square"></i>'
  }

}
