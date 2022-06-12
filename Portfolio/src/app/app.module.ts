import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { InfocardComponent } from './infocard/infocard.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { SkillComponent } from './skills/skill-list/skill/skill.component';
import { TimelineComponent } from './skills/timeline/timeline.component';
import { YearComponent } from './skills/timeline/year/year.component';
import { ProjectComponent } from './skills/timeline/year/project/project.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InfocardComponent,
    SkillsComponent,
    SkillListComponent,
    SkillComponent,
    TimelineComponent,
    YearComponent,
    ProjectComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
