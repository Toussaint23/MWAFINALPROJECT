import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {  MatButtonModule, MatCardModule, MatToolbarModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot([{path: '', loadChildren: './modules/intern.module#InternModule'}]),
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
