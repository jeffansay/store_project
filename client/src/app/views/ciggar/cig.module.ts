import { NgModule } from '@angular/core';


import { MarlboroComponent } from './marlboro.component';
import { MightyComponent } from './mighty.component';
import { CigRoutingModule } from './cig-routing.module';

@NgModule({
  imports: [
    CigRoutingModule,

  ],
  declarations: [
     MarlboroComponent,
     MightyComponent
    ]
})
export class CigModule { }
