import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';


import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepicker,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSlideToggleModule,
  } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';


import {SigninComponent} from '../components/login.component';
import {RegisterComponent} from '../components/register.component';
import {VerificationComponent} from '../components/verification.component';
import {HomeComponent} from '../components/home.component';
import {AuthGuard, CheckingGuard} from '../guards';
import {StudentsComponent } from '../components/students.component';
import {AllStudentsComponent } from '../components/all.students.component';
import {QstService } from '../services/qst.service';
import {QuestionDetailComponent} from '../components/question-detail.component';
import {InterviewQ, Comment} from '../models/interview-q';
import {IquestionlistComponent } from '../components/iquestionlist.component';
import {ViewquestionComponent } from '../components/viewquestion.component';

import {LoginService} from '../services/login.service';
import {ApiService} from '../services/api.service';

import {routes} from '../routes/routes';


@NgModule({
   declarations: [
    SigninComponent,
    VerificationComponent,
    RegisterComponent,
    HomeComponent,
    SigninComponent,
    StudentsComponent,
    AllStudentsComponent,
    IquestionlistComponent,
    QuestionDetailComponent,
    ViewquestionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,

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
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [AuthGuard, CheckingGuard, InterviewQ, QstService,
    {provide: LoginService, useClass: LoginService},
    {provide: ApiService, useClass: ApiService}],
  bootstrap: [HomeComponent]
})

export class InternModule { }
