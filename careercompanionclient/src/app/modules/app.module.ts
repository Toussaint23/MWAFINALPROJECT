import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatDatepicker,
  MatNativeDateModule,
  MatOptionModule,
  MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from '../app.component';
import {RegisterComponent} from '../components/register.component';
import {SigninComponent} from '../components/login.component';
import {StudentsComponent} from '../components/students.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { ApiService } from '../services/api.service';

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: StudentsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
