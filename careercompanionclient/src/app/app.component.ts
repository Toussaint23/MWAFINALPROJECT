import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <!-- Main Toolbar of an App -->
  <mat-toolbar color = "primary">
        <span style="flex: 1 1 auto">MUM Career Companion</span>
        <span>
          <button mat-button routerLink = ''>Home (LQ)</button>
          <button mat-button [routerLink] = "['save', 'student']">New User</button>
          <button mat-button [routerLink] = "['list', 'student']">Students</button>
          <button mat-button [routerLink] = "['list', 'student', 'hired']">Students hired</button>
          <button mat-button [routerLink] = "['save', 'question']">Post Question</button>
          <button mat-button [routerLink] = "['login']" [queryParams]="{signout:''}">Sign out</button>
        </span>
    </mat-toolbar>
<mat-card>
    <router-outlet></router-outlet>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public visible: Boolean;
  public title: String = 'MUM Career Companion';
  constructor() {}
}
