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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ConductorComponent,
    ConductorAddComponent,
    ConductorUpdateComponent,
    ConductorDetalleComponent
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
