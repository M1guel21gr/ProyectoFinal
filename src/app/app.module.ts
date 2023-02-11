import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './usuario/login/login.component';
import { SignUpComponent } from './usuario/sign-up/sign-up.component';
import { BusquedaService } from './busqueda/busqueda.service';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BusquedaCriteriaComponent } from './busqueda/busqueda-criteria/busqueda-criteria.component';
import { BusquedaResultComponent } from './busqueda/busqueda-result/busqueda-result.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    BusquedaComponent,
    BusquedaCriteriaComponent,
    BusquedaResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [UserService, BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
