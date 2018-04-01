import { NgModule } from '@angular/core';


import { EditComponent } from './edit.component';
import { EditFormRoutingModule } from './edit-form-routing.module';

@NgModule({
  imports: [
    EditFormRoutingModule,

  ],
  declarations: [ EditComponent ]
})
export class EditModule { }
