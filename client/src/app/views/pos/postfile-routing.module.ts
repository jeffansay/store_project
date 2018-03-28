import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { PosComponent } from './pos.component';

const routes: Routes = [
  {
    path: '',
    component: PosComponent,
    data: {
      title: 'PoS'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostFileRoutingModule {}
