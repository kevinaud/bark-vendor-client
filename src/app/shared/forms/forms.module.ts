import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';

import { FormComponent } from './form/form.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormService } from './form.service';

@NgModule({
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [
    FormComponent,
    FormFieldComponent
  ],
  exports: [ 
    FormComponent 
  ],
  providers: [
    FormService
  ]
})
export class FormsModule { }