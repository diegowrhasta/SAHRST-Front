import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { ClientsService } from './services/clients.service';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientComponent } from './client/client.component';
import { ClientformComponent } from './clientform/clientform.component';

import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { ClientsearchComponent } from './clientsearch/clientsearch.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    LoginComponent,
    ProfileComponent,
    ClientComponent,
    ClientformComponent,
    FilterPipe,
    ClientsearchComponent
  ],
  providers: [
    AuthService,
    ClientsService
  ]
})
export class AuthModule { }
