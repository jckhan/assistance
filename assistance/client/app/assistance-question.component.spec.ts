import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Question } from './models';
import { AssistanceQuestionComponent } from './assistance-question.component';

describe('Component: AssistanceQuestionComponent', () => {
  let component: AssistanceQuestionComponent;
  let fixture: ComponentFixture<AssistanceQuestionComponent>;
  let debugElement:      DebugElement;
  let element:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistanceQuestionComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceQuestionComponent);
    component = fixture.componentInstance;
  });

  it('should return true if the form control is valid', () => {
    const formControl = new FormControl('');
    const formGroup = new FormGroup({ testGroup: formControl })

    component.question = { controlType: 'text', id: 'testGroup', label: 'Label', required: false };
    component.form = formGroup;
    expect(component.isValid).toBe(true);
  });

  it('should display label', () => {
    debugElement = fixture.debugElement.query(By.css('label'));
    element = debugElement.nativeElement;

    const formControl = new FormControl('');
    const formGroup = new FormGroup({ testGroup: formControl })
    const question = {
      controlType: 'textbox',
      id: 'testGroup',
      label: 'Label',
      required: false
    };

    component.question = question;
    component.form = formGroup;

    fixture.detectChanges();
    expect(element.textContent).toContain(question.label);
  });

  it('should display input of type text', () => {
    const formControl = new FormControl('');
    const formGroup = new FormGroup({ testGroup: formControl })
    const question = {
      controlType: 'textbox',
      id: 'testGroup',
      label: 'Label',
      required: false,
      type: 'text'
    };

    component.question = question;
    component.form = formGroup;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css(`input#${question.id}`));
    element = debugElement.nativeElement;

    fixture.detectChanges();
    expect(element.textContent).toBeDefined();
  });

  it('should display input of type select', () => {
    const formControl = new FormControl('');
    const formGroup = new FormGroup({ testGroup: formControl })
    const question = {
      controlType: 'dropdown',
      id: 'testGroup',
      label: 'Label',
      required: false,
      options: [
        { key: 'one', value: 'One' },
        { key: 'two', value: 'Two' }
      ]
    };

    component.question = question;
    component.form = formGroup;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css(`select#${question.id}`));
    element = debugElement.nativeElement;

    fixture.detectChanges();
    expect(element.textContent).toBeDefined();
  });

  it('should display input of type textarea', () => {
    const formControl = new FormControl('');
    const formGroup = new FormGroup({ testGroup: formControl })
    const question = {
      controlType: 'textarea',
      id: 'testGroup',
      label: 'Label',
      required: false
    };

    component.question = question;
    component.form = formGroup;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css(`textarea#${question.id}`));
    element = debugElement.nativeElement;

    fixture.detectChanges();
    expect(element.textContent).toBeDefined();
  });

  it('should display input of type radio', () => {
    const formControl = new FormControl('');
    const formGroup = new FormGroup({ testGroup: formControl })
    const question = {
      controlType: 'radio',
      id: 'testGroup',
      label: 'Label',
      required: false,
      options: [
        { key: 'one', value: 'One' },
        { key: 'two', value: 'Two' }
      ]
    };

    component.question = question;
    component.form = formGroup;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css(`div#${question.id}`));
    element = debugElement.nativeElement;

    fixture.detectChanges();
    expect(element.textContent).toBeDefined();
  });

  xit('should display input of type checkbox', () => {
    const formControl = new FormControl('');
    const formGroup = new FormGroup({ testGroup: formControl })
    const question = {
      controlType: 'checkbox',
      id: 'testGroup',
      label: 'Label',
      required: false,
      options: [
        { key: 'one', value: 'One' },
        { key: 'two', value: 'Two' }
      ]
    };

    component.question = question;
    component.form = formGroup;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css(`div#${question.id}`));
    element = debugElement.nativeElement;

    fixture.detectChanges();
    expect(element.textContent).toBeDefined();
  });
})
