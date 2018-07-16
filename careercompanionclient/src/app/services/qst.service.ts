import { Injectable } from '@angular/core';
 import {Http, HttpModule} from '@angular/http';
 import {InterviewQ, Comment} from '../models/interview-q';
@Injectable({
  providedIn: 'root'
})
export class QstService {
  iquestions = [];

  constructor(private http: Http, private _interviewQ: InterviewQ) { }

 getQuestions() {
 return this.http.get('http://localhost:3000/careercompanion/1.0.0/questions').subscribe(res => {
    this.iquestions = res.json();
    console.log('this.iquestions', this.iquestions);
  });
 }

 addQuestion(addInterviewQ) {
  this._interviewQ.category = addInterviewQ.category;
  console.log('this._interviewQ.category: ', this._interviewQ.category);
   console.log('addInterviewQ: ', addInterviewQ);
  this.http.post('http://localhost:3000/careercompanion/1.0.0/questions',  addInterviewQ).subscribe(res => {
   console.log('res: ', res.json());
  });
}

}
