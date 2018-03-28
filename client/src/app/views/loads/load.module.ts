import { NgModule } from '@angular/core';


import { LoadComponent } from './load.component';
import { LoadRoutingModule } from './load-routing.module';

@NgModule({
  imports: [
    LoadRoutingModule,

  ],
  declarations: [ LoadComponent ]
})
export class LoadModule { }
