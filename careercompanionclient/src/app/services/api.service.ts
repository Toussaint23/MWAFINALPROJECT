import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class ApiService {
    students = [];
    constructor(private http: Http) {}

    getStudents(){
        this.http.get('http://localhost:3000/careercompanion/1.0.0/students/').subscribe(res =>{
          this.students = res.json();
          console.log(this.students[0].status);
        });
    }
}
