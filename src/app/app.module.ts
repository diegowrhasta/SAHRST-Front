import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing, appRoutingProviders } from '../app/app-routing/app-routing.module';

//import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { ConductorAddComponent } from './components/conductor-add/conductor-add.component';
import { ConductorUpdateComponent } from './components/conductor-update/conductor-update.component';
import { ConductorDetalleComponent } from './components/conductor-detalle/conductor-detalle.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { RutaAddComponent } from './components/ruta-add/ruta-add.component';
import { RutaUpdateComponent } from './components/ruta-update/ruta-update.component';
import { RutaDetalleComponent } from './components/ruta-detalle/ruta-detalle.component';
import { TipoPuntoComponent } from './components/tipo-punto/tipo-punto.component';
import { TipoPuntoAddComponent } from './components/tipo-punto-add/tipo-punto-add.component';
import { TipoPuntoUpdateComponent } from './components/tipo-punto-update/tipo-punto-update.component';
import { TipoPuntoDetalleComponent } from './components/tipo-punto-detalle/tipo-punto-detalle.component';
import { PuntoComponent } from './components/punto/punto.component';
import { PuntoAddComponent } from './components/punto-add/punto-add.component';
import { PuntoUpdateComponent } from './components/punto-update/punto-update.component';
import { PuntoDetalleComponent } from './components/punto-detalle/punto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ConductorComponent,
    ConductorAddComponent,
    ConductorUpdateComponent,
    ConductorDetalleComponent,
    RutaComponent,
    RutaAddComponent,
    RutaUpdateComponent,
    RutaDetalleComponent,
    TipoPuntoComponent,
    TipoPuntoAddComponent,
    TipoPuntoUpdateComponent,
    TipoPuntoDetalleComponent,
    PuntoComponent,
    PuntoAddComponent,
    PuntoUpdateComponent,
    PuntoDetalleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AuthModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
