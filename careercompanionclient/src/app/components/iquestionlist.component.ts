import { Component, OnInit } from '@angular/core';
import { QstService} from '../services/qst.service';
import {InterviewQ, Comment} from '../models/interview-q';
import {Observable, BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-iquestionlist',
  templateUrl: './iquestionlist.component.html',
  styleUrls: ['./iquestionlist.component.css']
})
export class IquestionlistComponent implements OnInit {
private  questions:  Array<InterviewQ> = [];
  constructor(private _QstService: QstService, private _InterviewQ: InterviewQ) {
  //  this.questions = new BehaviorSubject<InterviewQ[]>([]);
  }
  ngOnInit() {
    this.getQuestion();
  }

  // getQuestion() {
  //   this._QstService.getQuestions();
  // }

  public  getQuestion() {
    this._QstService.getQuestions().subscribe((data:  Array<InterviewQ>) => {
       this.questions   =  data;
        console.log(data);
        console.log('this.questions', this.questions);
        this.questions = data;
    });
}

}
