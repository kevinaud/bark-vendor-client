import { Component } from '@angular/core';

import { FormService } from '../shared/forms/form.service';

@Component({
  moduleId: module.id,
  selector: 'bark-home',
  template: `

 	  <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
      <div class="box bar-list">
        
        <bar-list></bar-list>

      </div>
    </div>
    </div>
  `,
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  
  fields: any[];
  
  constructor(formService: FormService) {
    this.fields = formService.getFields('add-bar');
  }

}