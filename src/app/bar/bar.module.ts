import { NgModule } from '@angular/core';

import { BarListModule } from './bar-list/bar-list.module';

// import { BarService } from './bar.service';

@NgModule({
  imports: [ BarModule ],
  declarations: [ ],
  exports: [ ],
  providers: [ /*BarService*/ ]
})
export class BarModule { }