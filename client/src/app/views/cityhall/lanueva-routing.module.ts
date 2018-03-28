import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { LanuevaComponent } from './lanueva.component';
import { SchoolComponent } from './schoolSupplies.component';

const routes: Routes = [
      {
        path: '',
          data: {
          title: 'en'
        },  children: [
          {
            path: 'lanueva',
            component: LanuevaComponent,
            data: {
              title: 'lanueva'
            }
          },
          {
            path: 'schoolSupplies',
            component: SchoolComponent,
            data: {
              title: 'schoolSup'
            }
          },
        ]

      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanuevaRoutingModule {}
