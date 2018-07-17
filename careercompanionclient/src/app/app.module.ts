import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LoginService} from './services/login.service';
import {ApiService} from './services/api.service';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatDatepicker,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {routes} from './routes/routes';

import { AppComponent } from './app.component';
import {SigninComponent} from './components/login.component';
import {RegisterComponent} from './components/register.component';
import {VerificationComponent} from './components/verification.component';
import {HomeComponent} from './components/home.component';
import {AuthGuard, CheckingGuard} from './guards';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    VerificationComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule
  ],
  providers: [AuthGuard, CheckingGuard,
              {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
              {provide: LoginService, useClass: LoginService},
              {provide: ApiService, useClass: ApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
