import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { LoadComponent } from './load.component';

const routes: Routes = [
      {
        path: '',
        component: LoadComponent,
        data: {
          title: 'Load'
        }
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadRoutingModule {}
