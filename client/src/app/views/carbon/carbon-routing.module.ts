import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarbonComponent } from './carbon.component';
import { SliComponent } from './sli.component';
import { PlasticComponent } from './plastic.component';
import { AccComponent } from './acc.component';
import { ToysComponent } from './toys.component';

const routes: Routes = [
{
  path: '',
    data: {
    title: 'en'
  },  children: [
    {
      path: 'carbon',
      component: CarbonComponent,
      data: {
        title: '8forever'
      }
    },
    {
      path: 'sli',
      component: SliComponent,
      data: {
        title: 'shoe-maker'
      }
    },

    {
      path: 'plastic',
      component: PlasticComponent,
      data: {
        title: 'plastic'
      }
    },

    {
      path: 'acc',
      component: AccComponent,
      data: {
        title: 'accessories'
      }
    },
    {
      path: 'toys',
      component: ToysComponent,
      data: {
        title: 'toys'
      }
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarbonRoutingModule {}
