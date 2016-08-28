import { Injectable }       from '@angular/core';

import { FieldBase }     from './form-field/field-types/base';
import { TextboxField }  from './form-field/field-types/textbox';
import { PasswordField }  from './form-field/field-types/password';

@Injectable()
export class FormService {

  formFields: FieldBase<any>[][] = [];

  getFields(formName: string) {

    let fields: FieldBase<any>[] = this.formFields[formName];

    return fields.sort((a, b) => a.order - b.order);

  };

  constructor(){

    this.formFields['add-bar'] = [
      new TextboxField({
        key: 'name',
        label: 'Name of Bar',
        required: true,
        order: 1
      }),
      new TextboxField({
        key: 'description',
        label: 'Description',
        order: 2
      }),
      new TextboxField({
        key: 'address',
        label: 'Street Address',
        order: 3
      })
    ]
    
  };

}