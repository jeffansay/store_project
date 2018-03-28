import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { MarlboroComponent } from './marlboro.component';
import { MightyComponent } from './mighty.component';

const routes: Routes = [
  {
    path: '',
      data: {
      title: 'en'
    },  children: [
      {
        path: 'marlboro',
        component: MarlboroComponent,
        data: {
          title: 'marlboro'
        }
      },
      {
        path: 'mighty',
        component: MightyComponent,
        data: {
          title: 'mighty'
        }
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CigRoutingModule {}
