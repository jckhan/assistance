import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Question } from './models';

@Component({
  moduleId: module.id,
  selector: 'assistance-form',
  templateUrl: 'assistance-form.component.html'
})

export class AssistanceFormComponent implements OnInit {
  @Input() questions: Array<Question>;

  formGroup: FormGroup;
  payload: string;

  private generateForm(questions: Array<Question>): FormGroup {
    const formControls = questions.reduce(this.generateControl, {});

    return new FormGroup(formControls);
  }

  private generateControl(controls: any, question: Question) {
    if (question.required) {
      controls[question.id] = new FormControl(question.value || '', Validators.required);
    } else {
      controls[question.id] = new FormControl(question.value || '');
    }

    return controls;
  }

  submit() {
    this.payload = JSON.stringify(this.formGroup.value);
  }

  ngOnInit() {
    this.formGroup = this.generateForm(this.questions);
  }
}
