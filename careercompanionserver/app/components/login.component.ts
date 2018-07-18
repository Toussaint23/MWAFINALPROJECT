import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
  } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';


@Component({
selector: 'app-login',
templateUrl: '../templates/login.html',

})
export class SigninComponent implements OnInit {
  loginPage: FormGroup;
    constructor(private formBuilder: FormBuilder, private loginService: LoginService,  private router: Router) {
        this.loginPage = formBuilder.group({
            'id': ['', Validators.required,  this.asyncSizeValidator]
        });
    }

    ngOnInit(): void {
      this.loginService.signout();
    }

    onSubmit() {
       this.loginService.getUserConnection(this.loginPage.value.id).subscribe((data) => {
          if (data.status === 200) {
            localStorage.setItem('checking', data.message);
            localStorage.setItem('checking-hash', data.token);
            this.router.navigate(['/verification']);
         } else {
            alert(`Error ${data.status}: ${data.message}`);
         }
       });
    }

    asyncSizeValidator(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>(
          (resolve, reject) => {
                const val: String = control.value + '';
              if (val.length !== 6) {
                resolve({ 'invalid': true });
              } else {
                resolve(null);
              }
          }
        );
        return promise;
    }
}

