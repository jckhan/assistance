import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Question } from './models';

@Component({
  moduleId: module.id,
  selector: 'assistance-question',
  templateUrl: 'assistance-question.component.html',
  styleUrls: []
})
export class AssistanceQuestionComponent {
  @Input() form: FormGroup;
  @Input() question: Question;

  get isValid(): boolean {
    let control = this.form.controls[this.question.id]
    return control.valid || control.pristine;
  }
}
