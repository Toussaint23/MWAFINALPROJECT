import { QstService} from '../services/qst.service';
import {InterviewQ, Comment} from '../models/interview-q';
// import {InterviewQues} from '../models/interviewquest';
import {Observable, BehaviorSubject} from 'rxjs';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from '../services/api.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-iquestionlist',
  templateUrl: './iquestionlist.component.html',
  styleUrls: ['./iquestionlist.component.css']
})
export class IquestionlistComponent implements OnInit {
  @Input()  questions: InterviewQ[];
  private  myQuestions:  Array<object> = [];
  private  interviewQuestions:  Array<InterviewQ> = [];
  myForm: FormGroup;
  constructor(private _QstService: QstService, private _InterviewQ: InterviewQ, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      'answer': ['', [Validators.required]],
  });
  this.myForm.valueChanges.subscribe(
    (data: any) => {
      console.log(data);
    });
  this.getQuestion();
  }
  displayedColumns = ['id', 'category', 'comapanyname', 'questiontext'];
  dataSource: MatTableDataSource<InterviewQ>;

    ngOnInit() {
   //   this.createForm();
  }
  submitQuestion(id) {
    if (this.myForm.get('answer').valid && this.myForm.get('answer').touched) {

  const answerControl = this.myForm.get('answer');
    const testJson = {
      'email': 'm@mum.edu',
      'date': Date.now,
      'textbody': answerControl.value
  };
    // this._QstService.addAnswer(id, testJson);
  }
  }
  viewQuestion(id) {
  //  this._QstService.getQuestionsById(id);
    console.log('detailInterviewQuestion', this._QstService.detailInterviewQuestion);
 }
  createForm() {
    this.myForm = this.formBuilder.group({
        'answer': ['write your Answer/comment', [Validators.required]],
    });
  }
  getQuestion() {
    this._QstService.getAllQuestions();
    this.dataSource = new MatTableDataSource<InterviewQ>(this._QstService.dataStore.interviewqs);
     this.myQuestions = this.dataSource.data;
     console.log('questions', this.myQuestions);
  }
  private handleError(err) {
    console.log(err);
    return Observable.throw(err || 'Server error'); }
}
