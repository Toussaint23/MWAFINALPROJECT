import { Component, OnInit } from '@angular/core';
import { QstService} from '../services/qst.service';
import {HttpParams, HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {InterviewQ, Comment} from '../models/interview-q';

@Component({
  selector: 'app-viewquestion',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})
export class ViewquestionComponent implements OnInit {
  displayedColumns = ['id', 'category', 'comapanyname', 'questiontext'];
  dataSource: MatTableDataSource<InterviewQ>;
  myQuestions;
  constructor(private _QstService: QstService, private httpClient: HttpClient, private _ActivatedRoute: ActivatedRoute) {
    const id = this._ActivatedRoute.snapshot.params['id'];

   // const returnedValue = this._QstService. getQuestionsById(id);
     this.dataSource = new MatTableDataSource<InterviewQ>(this._QstService.dataStore.interviewqs);
     this.myQuestions = this.dataSource.data;
    // console.log('questions', returnedValue);
    console.log('id', id);
    console.log('interviewqs',  this.myQuestions);
      console.log('this.detailInterviewQ.dataStore.interviewqs',  this._QstService.detailInterviewQ.detailInterviewqs);
       }

  ngOnInit() {
  }

  viewQuestion(id) {
   // this._QstService.getQuestionsById(id);
  }
}
