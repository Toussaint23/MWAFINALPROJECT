import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable()
export class LoginService {
    private baseUrl: String = 'http://localhost:3000/careercompanion/1.0.0';
    constructor(private http: Http) {}

    getUserConnection(id: number) {
         return this.http.get(`${this.baseUrl}/login/${id}`).pipe(map((res: Response) => res.json()));
    }

    signout() {
        localStorage.removeItem('checking');
        localStorage.removeItem('checking-hash');
        localStorage.removeItem('token');
    }
}
