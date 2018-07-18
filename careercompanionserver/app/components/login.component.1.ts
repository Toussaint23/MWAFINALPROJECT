import {Component} from '@angular/core';
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
export class SigninComponent {
  loginPage: FormGroup;
    constructor(private formBuilder: FormBuilder, private loginService: LoginService,  private router: Router) {
        this.loginPage = formBuilder.group({
            'id': ['', Validators.required,  this.asyncSizeValidator]
        });

        /* this.loginPage.valueChanges.subscribe(
            (data: any) => console.log(data)
        );
        this.loginPage.statusChanges.subscribe(
            (data: any) => console.log(this.loginPage.status)
        );*/
    }

    onSubmit() {
      localStorage.removeItem('checking');
      this.router.navigate(['/verification']);
       /*  console.log(this.loginPage.value);
        const token = 'toto';
        localStorage.setItem('token', token); */
       // this.loginService.getUserConnection().subscribe((data) => console.log(data));
    }


    /* getData() {
        this.userService.getUserData().subscribe(data => {
          this.userForm.controls['name'].setValue(data.name);
          this.userForm.controls['email'].setValue(data.email);
        });

        this.userService.getPostData().subscribe(data => {
          this.userForm.controls['post'].setValue(data[0].body);
        });

      } */




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

