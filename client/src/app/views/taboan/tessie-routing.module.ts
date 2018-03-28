import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { TessieComponent } from './tessie.component';
import { BuwadComponent } from './buwad.component';
const routes: Routes = [
  {
    path: '',
      data: {
      title: 'en'
    },  children: [
      {
        path: 'tessie',
        component: TessieComponent,
        data: {
          title: 'tessie'
        }
      },
      {
        path: 'buwad',
        component: BuwadComponent,
        data: {
          title: 'buwad'
        }
      }

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TessieRoutingModule {}
