import { QstService} from '../services/qst.service';
import {InterviewQ, Comment} from '../models/interview-q';
import {Observable, BehaviorSubject} from 'rxjs';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-iquestionlist',
  templateUrl: './iquestionlist.component.html',
  styleUrls: ['./iquestionlist.component.css']
})
export class IquestionlistComponent implements OnInit {
  @Input()  questions: InterviewQ[];

  constructor(private _QstService: QstService, private _InterviewQ: InterviewQ) {
  //  this.questions = new BehaviorSubject<InterviewQ[]>([]);
  this.getQuestion();
  }
  displayedColumns = ['category', 'comapanyname', 'questiontext'];
    dataSource: MatTableDataSource<InterviewQ>;

  ngOnInit() {
   // this.getQuestion();
  }

  // getQuestion() {
  //   this._QstService.getQuestions();
  // }

  getQuestion() {
    this._QstService.loadAll();
  }

//   public  getQuestion() {
//     this._QstService.getQuestions().subscribe((data:  Array<InterviewQ>) => {
//        this.questions   =  data;
//         console.log(data);
//         console.log('this.questions', this.questions);
//         this.questions = data;
//     });
// }

}
