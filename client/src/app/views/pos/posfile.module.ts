import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

import { PosComponent } from './pos.component';
import { PostFileRoutingModule } from './postfile-routing.module';


@NgModule({
  imports: [
    PostFileRoutingModule,
    TabsModule,
    CommonModule

  ],
  declarations: [ PosComponent ]
})
export class PosFileModule { }
