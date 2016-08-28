import { Component } from '@angular/core';

import { FormService } from './shared/forms/form.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  /*template: `
 	  <div>
      <h2>Job Application for Heroes</h2>
      <dynamic-form [fields]="fields"></dynamic-form>
    </div>
    <md-icon>star</md-icon>
  `,*/
  template: `
    <dash-sidenav>

      <dash-toolbar></dash-toolbar>

      <router-outlet></router-outlet>

    </dash-sidenav>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  /*fields: any[];
  
  constructor(formService: FormService) {
    this.fields = formService.getFields('add-bar');
  }*/

}