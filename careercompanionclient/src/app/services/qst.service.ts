import { Injectable } from '@angular/core';
 import {Http, HttpModule} from '@angular/http';
 import {InterviewQ, Comment} from '../models/interview-q';
 import {Observable, BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QstService {
  iquestions = [];
   private _InterviewQ: BehaviorSubject<InterviewQ[]>;
  constructor(private httpClient: HttpClient, private _interviewQ: InterviewQ) { }

 getQuestions() {
 return this.httpClient.get('http://localhost:3000/careercompanion/1.0.0/questions'); // .subscribe(res => {
    // this.iquestions = res.json();
  //  console.log('this.iquestions', res.json());
 // });
 }

 addQuestion(addInterviewQ) {
  // this._interviewQ.category = addInterviewQ.
  // console.log('this._interviewQ.category: ', this._interviewQ.category);
  //  console.log('addInterviewQ: ', addInterviewQ);
  this.httpClient.post('http://localhost:3000/careercompanion/1.0.0/questions',  addInterviewQ).subscribe((data:  Array<InterviewQ>)  => {

  });
}

// addQuestion(addInterviewQ) {
//   this._interviewQ.category = addInterviewQ.
//   console.log('this._interviewQ.category: ', this._interviewQ.category);
//    console.log('addInterviewQ: ', addInterviewQ);
//   this.httpClient.post('http://localhost:3000/careercompanion/1.0.0/questions',  addInterviewQ).subscribe(res => {
//    // console.log('res: ', res.json());
//   });
// }

}
