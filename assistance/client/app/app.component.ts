import { Component } from '@angular/core';

import { Question } from './models';

@Component({
  moduleId: module.id,
  selector: 'assistance-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  questions: Array<Question>;

  constructor() {
    this.questions = [
      {
        controlType: 'textbox',
        id: 'text',
        label: 'Text',
        required: true,
        type: 'text'
      },
      {
        controlType: 'textbox',
        id: 'email',
        label: 'Email',
        required: true,
        type: 'email'
      },
      {
        controlType: 'textbox',
        id: 'pass',
        label: 'Password',
        required: true,
        type: 'password'
      },
      {
        controlType: 'dropdown',
        id: 'select',
        label: 'Select',
        required: true,
        options: [
          { key: 'one', value: 'One' },
          { key: 'two', value: 'Two' }
        ]
      },{
        controlType: 'textarea',
        id: 'area',
        label: 'Area',
        required: true
      },
      {
        controlType: 'radio',
        id: 'radio',
        label: 'Radio',
        required: true,
        options: [
          { key: 'one', value: 'One' },
          { key: 'two', value: 'Two' },
          { key: 'three', value: 'Three' }
        ]
      }
    ];
  }
}
