import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {routes} from './routes/routes';

import {LoginService} from './services/login.service';
import {ApiService} from './services/api.service';
import { AppComponent } from './app.component';
import {SigninComponent} from './components/login.component';
import {RegisterComponent} from './components/register.component';
import {VerificationComponent} from './components/verification.component';
import {HomeComponent} from './components/home.component';
import {AuthGuard, CheckingGuard} from './guards';
import {StudentsComponent } from './components/students.component';
import {AllStudentsComponent } from './components/all.students.component';
import { QstService } from './services/qst.service';
import {QuestionDetailComponent} from './components/question-detail.component';
import {InterviewQ, Comment} from './models/interview-q';
import { IquestionlistComponent } from './components/iquestionlist.component';
import { ViewquestionComponent } from './components/viewquestion.component';
// import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
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
  //  HomepageComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
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
    MatSlideToggleModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule
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
  providers: [AuthGuard, CheckingGuard, InterviewQ, QstService,
              {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
              {provide: LoginService, useClass: LoginService},
              {provide: ApiService, useClass: ApiService}],
              /* MatSlideToggleModule, */
             /*  BrowserAnimationsModule, */
              /* HttpClientModule, */
              /* HttpModule, */
            /*   MatGridListModule, */
  bootstrap: [AppComponent]
})
export class AppModule { }
