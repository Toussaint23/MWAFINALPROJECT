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
templateUrl: '../templates/verification.html',

})
export class VerificationComponent {
  confirmationPage: FormGroup;
    constructor(private formBuilder: FormBuilder, private loginService: LoginService,  private router: Router) {
        this.confirmationPage = formBuilder.group({
            'code': ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])]
        });
    }

    onSubmit() {
       if (this.confirmationPage.value.code === localStorage.getItem('checking')) {
          localStorage.setItem('token', localStorage.getItem('checking-hash'));
          localStorage.removeItem('checking-hash');
          localStorage.removeItem('checking');
          this.router.navigate(['/']);
       } else {
         alert('Confirmation failed');
       }
    }
}

