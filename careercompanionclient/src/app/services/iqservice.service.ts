import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { delay} from 'rxjs/operators';
import { InterviewQ, interviews} from '../models/interview-q';

@Injectable({
  providedIn: 'root'
})
export class IqserviceService {

  constructor() { }
  getInterveiws(): Observable<InterviewQ[]> {
    return of(interviews).pipe();
  }

  updateInterviewQ (interviewQ: InterviewQ): Observable<InterviewQ> {

    const beforeInterviewQ = interviews.find(i => i.id === interviewQ.id);
    const newInterviewQ = Object.assign(beforeInterviewQ, interviewQ);
    return of(newInterviewQ).pipe();
  }
}
