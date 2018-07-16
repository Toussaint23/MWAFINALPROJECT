import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatDatepicker,

  MatNativeDateModule,
  MatOptionModule,
  MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { AppComponent } from './app.component';
import {RegisterComponent} from './components/register.component';
import {SigninComponent} from './components/login.component';
import { ApiService } from './services/api.service';
import { StudentsComponent } from './components/students.component';
import { QstService } from './services/qst.service';
import {QuestionDetailComponent} from './components/question-detail.component';
import {InterviewQ, Comment} from './models/interview-q';
import { IquestionlistComponent } from './components/iquestionlist.component';

const routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: StudentsComponent},
  {path: 'addquestion', component: QuestionDetailComponent},
  {path: 'listquestion', component: IquestionlistComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    StudentsComponent,
    IquestionlistComponent,
    QuestionDetailComponent

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserModule,
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
    BrowserAnimationsModule,
   HttpClientModule,
   HttpModule,
   MatGridListModule
  ],
  providers: [ApiService, InterviewQ, QstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
