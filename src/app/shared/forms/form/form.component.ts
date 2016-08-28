import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { FieldBase }              from '../form-field/field-types/base';
import { FieldControlService }    from '../form-field/field-control.service';

@Component({
  selector: 'dynamic-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit()" [formGroup]="form">

        <div *ngFor="let field of fields" class="form-row">
          <app-form-field [field]="field" [form]="form"></app-form-field>
        </div>
        
        <div class="form-row">
          <button md-raised-button type="submit" [disabled]="!form.valid">Save</button>
        </div>
      
      </form>
      
      <div *ngIf="payLoad" class="form-row">
        <strong>Saved the following values</strong><br>{{payLoad}}
      </div>
    
    </div>
  `,
  providers: [ FieldControlService ]
})
export class FormComponent implements OnInit {

  @Input() fields: FieldBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private fcs: FieldControlService) {  }
  
  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields);
    this.form.valueChanges.subscribe(value => {
      console.log(value);
      console.log(this.form.valid);
    });
  }
  
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}