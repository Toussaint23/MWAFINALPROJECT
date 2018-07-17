import { SigninComponent } from '../components/login.component';
import {VerificationComponent} from '../components/verification.component';
import {RegisterComponent} from '../components/register.component';
import {HomeComponent} from '../components/home.component';
import {AuthGuard, CheckingGuard} from '../guards';

export const routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: SigninComponent},
    {path: 'verification', component: VerificationComponent, canActivate: [CheckingGuard]},
    {path: 'save/student', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'update/student', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'list/student/hired', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'list/student/', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'save/question', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'list/question', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'comment', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '' }
];

