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
        controlType: 'text-input',
        id: 'name',
        label: 'Nombre',
        required: true
      },
      {
        controlType: 'text-input',
        id: 'user',
        label: 'MX',
        required: false
      },
      {
        controlType: 'text-input',
        id: 'email',
        label: 'Correo electrónico',
        required: true,
        type: 'email'
      },{
        controlType: 'text-input',
        id: 'algo',
        label: 'Prueba',
        required: true
      }
    ];
  }
}
