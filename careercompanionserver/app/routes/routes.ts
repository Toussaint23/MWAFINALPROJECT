import { SigninComponent } from '../components/login.component';
import {VerificationComponent} from '../components/verification.component';
import {RegisterComponent} from '../components/register.component';
import {HomeComponent} from '../components/home.component';
import {StudentsComponent} from '../components/students.component';
import {AllStudentsComponent} from '../components/all.students.component';
import {QuestionDetailComponent} from '../components/question-detail.component';
import {IquestionlistComponent} from '../components/iquestionlist.component';
import {AuthGuard, CheckingGuard} from '../guards';

export const routes = [
    {path: '', component: IquestionlistComponent, canActivate: [AuthGuard]},
    {path: 'login', component: SigninComponent},
    {path: 'verification', component: VerificationComponent, canActivate: [CheckingGuard]},
    {path: 'save/student', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'update/student', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'list/student/hired', component: StudentsComponent, canActivate: [AuthGuard]},
    {path: 'list/student', component: AllStudentsComponent, canActivate: [AuthGuard]},
    {path: 'save/question', component: QuestionDetailComponent, canActivate: [AuthGuard]},
    {path: 'list/question', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'comment', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '' }
];

// to check later
/* const routes = [
    {path: 'welcome', component: StudentsComponent},
    {path: 'listquestion', component: IquestionlistComponent},
    {path: 'listquestion/viewquestion/:id', component: ViewquestionComponent}
  ]; */

