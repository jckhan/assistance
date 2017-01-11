import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component'
import { AssistanceQuestionComponent } from './assistance-question.component'
import { AssistanceFormComponent } from './assistance-form.component'


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AssistanceFormComponent,
    AssistanceQuestionComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
