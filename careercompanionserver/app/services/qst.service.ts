import { Injectable } from '@angular/core';
import {Http, HttpModule, Response} from '@angular/http';
import {InterviewQ, Comment} from '../models/interview-q';
import {map} from 'rxjs/operators';
 import {Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QstService {
  detailInterviewQuestion;
   // iquestions = [];
   private _InterviewQ: BehaviorSubject<InterviewQ[]>;
   private _InterviewQDetail: BehaviorSubject<InterviewQ[]>;
   dataStore: {
    interviewqs: InterviewQ[]
  };
   detailInterviewQ: {
    detailInterviewqs: InterviewQ[]
  };
  constructor(private http: HttpClient, private _interviewQ: InterviewQ) {
    this.dataStore = { interviewqs: [] };
    this.detailInterviewQ = { detailInterviewqs: [] };
    this._InterviewQ = new BehaviorSubject<InterviewQ[]>([]);
  }

 getQuestions() {
 return this.http.get('http://localhost:3000/careercompanion/1.0.0/questions');
 }

addQuestion(addInterviewQ) {
  return this.http.post('http://localhost:3000/careercompanion/1.0.0/questions',  addInterviewQ).pipe(map((res: Response) => res.json()));
}
/* getQuestionsById(id) {
  const Url = `http://localhost:3000/careercompanion/1.0.0/questions/${id}`;
  console.log('Url', Url);
  let detailInterview;
   this.http.get(Url)
    .subscribe(data => {
        this.detailInterviewQ.detailInterviewqs = data;
        detailInterview = data[0];
        console.log('data', data);
    //  console.log('byId', this.detailInterviewQuestion);
      this._InterviewQ.next(Object.assign({}, this.detailInterviewQ).detailInterviewqs);
    }, error => {
      console.log(error);
      console.log('Failed to fetch iquestion');
    });
    console.log('detailInterviewQuestion', detailInterview);
    return detailInterview;
}




// getQuestionsById(id) {
//   const Url = `http://localhost:3000/careercompanion/1.0.0/questions/${id}`;
//   console.log('Url', Url);
//   return this.httpClient.get<InterviewQ[]>(Url)
//     .subscribe(data => {
//     //  this.dataStore.interviewqs = data;
//         this.detailInterviewQuestion = data[0];
//       console.log('byId', this.detailInterviewQuestion);
//    //   this._InterviewQ.next(Object.assign({}, this.dataStore).interviewqs);
//     }, error => {
//       console.log(error);
//       console.log('Failed to fetch iquestion');
//     });
// }
addAnswer(id, answer) {
  const Url = `http://localhost:3000/careercompanion/1.0.0/questions/${id}`;
  console.log('Url', Url);
  return this.http.put<InterviewQ[]>(Url, answer)
    .subscribe(data => {
   //   this.dataStore.interviewqs = data;
      console.log('byId', data);
 //     this._InterviewQ.next(Object.assign({}, this.dataStore).interviewqs);
    }, error => {
      console.log(error);
      console.log('Failed to fetch iquestion');
    });
}
// getQuestionsById(id) {
//   const Url = `http://localhost:3000/careercompanion/1.0.0/questions/${id}`;
//   console.log('Url', Url);
//   return this.httpClient.get<InterviewQ[]>(Url)
//     .subscribe(data => {
//       this.dataStore.interviewqs = data;
//       console.log('byId', data);
//       this._InterviewQ.next(Object.assign({}, this.dataStore).interviewqs);
//     }, error => {
//       console.log(error);
//       console.log('Failed to fetch iquestion');
//     });
// }*/

getAllQuestions() {
  const Url = 'http://localhost:3000/careercompanion/1.0.0/questions';
  let params = new HttpParams();
  params = params.append('token', localStorage.getItem('token'));
  return this.http.get<any>(Url, {params: params, })
    .subscribe(data => {
      this.dataStore.interviewqs = data.message;
      console.log('data', data.message);
      this._InterviewQ.next(Object.assign({}, this.dataStore).interviewqs);
    }, error => {
      console.log(error);
      console.log('Failed to fetch iquestion');
    });
}


}
