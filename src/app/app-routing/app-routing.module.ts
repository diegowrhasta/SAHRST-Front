import { ModuleWithProviders} from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../auth/login/login.component';
//import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ConductorComponent } from '../components/conductor/conductor.component';
import { ConductorAddComponent } from '../components/conductor-add/conductor-add.component';
import { ConductorUpdateComponent } from '../components/conductor-update/conductor-update.component';

const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegisterComponent},
  {path:'conductor', component: ConductorComponent},
  {path:'conductor-add', component: ConductorAddComponent},
  {path:'conductor-update', component: ConductorUpdateComponent},
  {path:'**', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

/*@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '', pathMatch: 'full' },
      //{ path: '', redirectTo: 'admin', pathMatch: 'full' },
      //{ path: 'auth/login', component: LoginComponent },
      //{ path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
*/