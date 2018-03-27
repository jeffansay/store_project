import { NgModule } from '@angular/core';


import { CarbonComponent } from './carbon.component';
import { SliComponent } from './sli.component';
import { PlasticComponent } from './plastic.component';
import { CarbonRoutingModule } from './carbon-routing.module';
import { AccComponent } from './acc.component';
import { ToysComponent } from './toys.component';



@NgModule({
  imports: [
    CarbonRoutingModule,

  ],
  declarations: [
    CarbonComponent,
    SliComponent,
    PlasticComponent,
    AccComponent,
    ToysComponent

  ]
})
export class CarbonModule { }
