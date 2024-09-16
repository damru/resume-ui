import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { JobsComponent } from './experiences/jobs/jobs.component';
import { ScholarshipComponent } from './experiences/scholarship/scholarship.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ExperiencesComponent,
    JobsComponent,
    ScholarshipComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
