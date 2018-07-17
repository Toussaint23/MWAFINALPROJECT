import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable()
export class ApiService {
    private baseUrl: String = 'http://localhost:3000/careercompanion/1.0.0';
    constructor(private http: Http) {}

    saveUser(user: any) {
       return this.http.post(`${this.baseUrl}/student/saving`, user).pipe(map((res: Response) => res.json()));
    }
}
