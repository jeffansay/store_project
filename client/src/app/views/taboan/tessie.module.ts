import { NgModule } from '@angular/core';

import { BuwadComponent } from './buwad.component'
import { TessieComponent } from './tessie.component';
import { TessieRoutingModule } from './tessie-routing.module';


@NgModule({
  imports: [
    TessieRoutingModule,

  ],
  declarations: [
    TessieComponent,
    BuwadComponent 
  ]
})
export class TessieModule { }
