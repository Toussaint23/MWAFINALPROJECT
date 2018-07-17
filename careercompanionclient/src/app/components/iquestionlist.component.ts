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
  FormArray
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
  this.getQuestion();
  }
  displayedColumns = ['id', 'category', 'comapanyname', 'questiontext'];
    dataSource: MatTableDataSource<InterviewQ>;

    ngOnInit() {
   //   this.createForm();
  }
  viewQuestion(id) {
    const testJson = {
      'email': 'm@mum.edu',
      'date': '',
      'textbody': 'this is my answer'
  };
    this._QstService.addAnswer(id, testJson);
   // this._QstService.getQuestionsById(id);
  }
  answerQuestion(id) {
   // this.createForm();
  //  (<FormArray>this.myForm.controls['answer']).push(new FormControl('', Validators.required));
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

}
