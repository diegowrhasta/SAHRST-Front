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
import { ConductorDetalleComponent } from "../components/conductor-detalle/conductor-detalle.component";
import { RutaComponent } from '../components/ruta/ruta.component';
import { RutaAddComponent } from '../components/ruta-add/ruta-add.component';
import { RutaUpdateComponent } from '../components/ruta-update/ruta-update.component';
import { RutaDetalleComponent } from '../components/ruta-detalle/ruta-detalle.component';
import { TipoPuntoComponent } from '../components/tipo-punto/tipo-punto.component';
import { TipoPuntoAddComponent } from '../components/tipo-punto-add/tipo-punto-add.component';
import { TipoPuntoUpdateComponent } from '../components/tipo-punto-update/tipo-punto-update.component';
import { TipoPuntoDetalleComponent } from '../components/tipo-punto-detalle/tipo-punto-detalle.component';
import { PuntoComponent } from '../components/punto/punto.component';
import { PuntoAddComponent } from '../components/punto-add/punto-add.component';
import { PuntoUpdateComponent } from '../components/punto-update/punto-update.component';
import { PuntoDetalleComponent } from '../components/punto-detalle/punto-detalle.component';

import { PuntoRutaComponent } from '../components/punto-ruta/punto-ruta.component';
import { PuntoRutaAddComponent } from '../components/punto-ruta-add/punto-ruta-add.component';


const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegisterComponent},
  /*****CONDUCTOR****/
  {path:'conductor', component: ConductorComponent},
  {path:'conductor-add', component: ConductorAddComponent},
  {path:'conductor-update/:id', component: ConductorUpdateComponent},
  {path:'conductor/:id', component: ConductorDetalleComponent},
  /*****RUTA****/
  {path:'ruta', component:RutaComponent},
  {path:'ruta-add', component:RutaAddComponent},
  {path:'ruta-update/:id', component:RutaUpdateComponent},
  {path:'ruta/:id', component:RutaDetalleComponent},
  /*****TIPO PUNTO****/
  {path:'tipo-punto', component:TipoPuntoComponent},
  {path:'tipo-punto-add', component:TipoPuntoAddComponent},
  {path:'tipo-punto-update/:id', component:TipoPuntoUpdateComponent},
  {path:'tipo-punto/:id', component:TipoPuntoDetalleComponent},
  /*****PUNTO****/
  {path:'punto', component:PuntoComponent},
  {path:'punto-add', component:PuntoAddComponent},
  {path:'punto-update/:id', component:PuntoUpdateComponent},
  {path:'punto/:id', component:PuntoDetalleComponent},
  /*****PUNTO-RUTA****/
  {path:'punto-ruta', component:PuntoRutaComponent},
  {path:'punto-ruta-add', component:PuntoRutaAddComponent},

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