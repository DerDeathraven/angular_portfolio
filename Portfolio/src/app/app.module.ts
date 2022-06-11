import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { InfocardComponent } from './infocard/infocard.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InfocardComponent,
    SkillsComponent,
    SkillListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
