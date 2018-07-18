import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import { Student } from '../models/student';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiService {
  private baseUrl: String = 'http://localhost:3000/careercompanion/1.0.0';
  private _students: BehaviorSubject<Student[]>;
  private _students1: BehaviorSubject<Student[]>;
  dataStore: { students: Student[]};
  dataStores: { students: Student[]};

  constructor(private http: HttpClient) {
    this.dataStore = {students: []};
    this.dataStores = {students: []};
    this._students = new BehaviorSubject<Student[]>([]);
    this._students1 = new BehaviorSubject<Student[]>([]);
  }

  saveUser(user: any) {
      return this.http.post(`${this.baseUrl}/student/saving`, user).pipe(map((res: Response) => res.json()));
  }

  students(): Observable<Student[]> {
    return this._students1.asObservable();
  }
  studentById(_id: string) {
    return this.dataStores.students.find(x => x._id === _id);
  }

  loadAll() {
    let params = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));
    const studentUrl = this.baseUrl + '/students/hired';
     return this.http.get<any>(studentUrl, {params: params, })
      .subscribe(datas => {
        console.log(datas.message);
        console.log(datas.token);
        this.dataStore.students = datas.message;
        this._students.next(Object.assign({}, this.dataStore).students);
      }, error => {
        console.log('Failed to fetch students');
      });
  }

  loadAllStudent() {
    let params = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));
    const studentUrl = this.baseUrl + '/students/hired/candidate';
     return this.http.get<any>(studentUrl, {params: params, })
      .subscribe(datas => {
        console.log(datas.message);
        console.log(datas.token);
        this.dataStores.students = datas.message;
        this._students1.next(Object.assign({}, this.dataStores).students);
      }, error => {
        console.log('Failed to fetch students');
      });
  }
}
