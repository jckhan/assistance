import { TestBed, async } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AssistanceFormComponent } from './assistance-form.component';
import { AssistanceQuestionComponent } from './assistance-question.component';

describe('Component: AssistanceFormComponent', ()=>{
  let component: AssistanceFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceFormComponent, AssistanceQuestionComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    const fixture = TestBed.createComponent(AssistanceFormComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should create a `FormGroup` comprised of `FormControl`s', () => {
    component.questions = [];
    component.ngOnInit();
    expect(component.formGroup instanceof FormGroup).toBe(true);
  });

  it('should create a `FormControl` for each question', () => {
    component.questions = [
      {
        controlType: 'text',
        id: 'first',
        label: 'My First',
        required: false
      },
      {
        controlType: 'text',
        id: 'second',
        label: 'Second!',
        required: true
      }
    ];
    component.ngOnInit();

    expect(Object.keys(component.formGroup.controls)).toEqual([
      'first', 'second'
    ]);
  });

  it('should set the `payload` to a stringified version of our form values', () => {
    component.questions = [
      {
        controlType: 'text',
        id: 'first',
        label: 'My First',
        required: false
      },
      {
        controlType: 'text',
        id: 'second',
        label: 'Second!',
        required: true
      }
    ];
    component.ngOnInit();

    component.formGroup.controls['first'].setValue('pizza');
    component.submit();

    expect(component.payload).toEqual(JSON.stringify({first: 'pizza', second: ''}));
  });

})
