import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { LanuevaComponent } from './lanueva.component';
import { SchoolComponent } from './schoolSupplies.component';
import { LanuevaRoutingModule } from './lanueva-routing.module';

@NgModule({
  imports: [
    LanuevaRoutingModule,

  ],
  declarations: [
    LanuevaComponent,
    SchoolComponent

  ]
})
export class LanuevaModule { }
