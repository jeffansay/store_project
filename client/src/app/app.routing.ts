import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './conts/loginform/loginform.component';
import { NotfoundComponent } from './conts/notfound/notfound.component';
import { RegisterformComponent } from './conts/registerform/registerform.component';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: SimpleLayoutComponent,
  },
  {
    path: 'login',
    component: LoginformComponent
  },
  {
    path: 'dashboard',
    component: FullLayoutComponent
  },
  {
    path: 'register',
    component: RegisterformComponent
  },
  {
    path:'**',
    component: NotfoundComponent
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
