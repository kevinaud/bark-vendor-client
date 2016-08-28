import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase }     from './field-types/base';

@Component({
  moduleId: module.id,
  selector: 'app-form-field',
  template: `
    <div [formGroup]="form">
      
      <div [ngSwitch]="field.controlType">
        
        <md-input *ngSwitchCase="'textbox'" 
          [formControlName]="field.key"
          [id]="field.key" 
          [type]="field.type"
          [placeholder]="field.label"></md-input>

        <md-input *ngSwitchCase="'password'" 
          [formControlName]="field.key"
          [id]="field.key" 
          type=password
          [placeholder]="field.label"></md-input>
      
      </div> 
      
      <div class="errorMessage" *ngIf="displayError && !isValid">
        {{field.label}} is required
      </div>
    
    </div>
  `,
  styleUrls: ['form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  constructor() { }

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  get displayError() {
    return this.form.controls[this.field.key].touched;
  }

  get isValid() { 
    return this.form.controls[this.field.key].valid;
  }

  ngOnInit() {
  }

}
