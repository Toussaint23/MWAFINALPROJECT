import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <mat-toolbar>MUM Career Companion
  <span style="flex: 1 1 auto"></span>
  <button mat-button routerLink = '/register'>SignUp</button>
  <button mat-button routerLink = '/login'>SignIn</button>
  <button mat-button routerLink = '/addquestion'>add Question</button>
  <button mat-button routerLink = '/listquestion'>list Question</button>
  </mat-toolbar>
  <router-outlet></router-outlet>


  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MUM Career Companion';
}
