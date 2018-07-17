import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private _students: BehaviorSubject<Student[]>;
  
    dataStore: {
      students: Student[]
    }
  
    constructor(private http: HttpClient) {
      this.dataStore = { students:[] };
      this._students = new BehaviorSubject<Student[]>([]);
    }
  
    students(): Observable<Student[]> {
      return this._students.asObservable();
    }
  
    studentById(_id: string) {
      return this.dataStore.students.find(x => x._id === _id);
    }
  
    loadAll() {
      const studentUrl = 'http://localhost:3000/careercompanion/1.0.0/students/hired';
  
      return this.http.get<Student[]>(studentUrl)
        .subscribe(data => {
          this.dataStore.students = data;
          this._students.next(Object.assign({}, this.dataStore).students);
        }, error => {
          console.log("Failed to fetch students");
        });
    }
    
}
