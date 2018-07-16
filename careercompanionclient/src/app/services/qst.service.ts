import { Injectable } from '@angular/core';
 import {Http, HttpModule} from '@angular/http';
 import {InterviewQ, Comment} from '../models/interview-q';
 import {Observable, BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QstService {
  // iquestions = [];
   private _InterviewQ: BehaviorSubject<InterviewQ[]>;

   dataStore: {
    interviewqs: InterviewQ[]
  };

  constructor(private httpClient: HttpClient, private _interviewQ: InterviewQ) {
    this.dataStore = { interviewqs: [] };
    this._InterviewQ = new BehaviorSubject<InterviewQ[]>([]);
  }

 getQuestions() {
 return this.httpClient.get('http://localhost:3000/careercompanion/1.0.0/questions');
 }

 addQuestion(addInterviewQ) {
  // this._interviewQ.category = addInterviewQ.
  // console.log('this._interviewQ.category: ', this._interviewQ.category);
  //  console.log('addInterviewQ: ', addInterviewQ);
  this.httpClient.post('http://localhost:3000/careercompanion/1.0.0/questions',  addInterviewQ).subscribe((data:  Array<InterviewQ>)  => {

  });
}

loadAll() {
  const Url = 'http://localhost:3000/careercompanion/1.0.0/questions';

  return this.httpClient.get<InterviewQ[]>(Url)
    .subscribe(data => {
      this.dataStore.interviewqs = data;
      this._InterviewQ.next(Object.assign({}, this.dataStore).interviewqs);
    }, error => {
      console.log('Failed to fetch iquestion');
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
