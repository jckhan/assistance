import { TestBed, async } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Question } from './models';
import { AssistanceQuestionComponent } from './assistance-question.component';

describe('Component: DynamicQuestionComponent', () => {
  let component: AssistanceQuestionComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceQuestionComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    const fixture = TestBed.createComponent(AssistanceQuestionComponent);
    component = fixture.componentInstance;
  });

  it('should return true if the form control is valid', () => {
    const formControl = new FormControl('test-control');
    const formGroup = new FormGroup({ testGroup: formControl })

    component.question = { controlType: 'text', id: 'testGroup', label: 'Label', required: false };
    component.form = formGroup;
    expect(component.isValid).toBe(true);
  });
})
