
import { Injectable } from '@angular/core';
 import {Http, HttpModule} from '@angular/http';
 import {InterviewQ, Comment} from '../models/interview-q';
 import {Observable, BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private _interviewQs: BehaviorSubject<InterviewQ[]>;
    private dataStore: {
        interviewQs: InterviewQ[]
    };

    constructor(private http: HttpClient) {
      this.dataStore = { interviewQs: [] };
      this._interviewQs = new BehaviorSubject<InterviewQ[]>([]);
    }

    get interviewQs(): Observable<InterviewQ[]> {
      return this._interviewQs.asObservable();
    }

    // questionById(_id: string) {
    //   return this.dataStore.interviewQs.find(x => x.id === _id);
    // }

    loadAll() {
      const Url = 'http://localhost:3000/careercompanion/1.0.0/questions';
      return this.http.get<InterviewQ[]>(Url)
        .subscribe(data => {
          this.dataStore.interviewQs = data;
          this._interviewQs.next(Object.assign({}, this.dataStore).interviewQs);
        }, error => {
          console.log('Failed to fetch students');
        });
    }
}