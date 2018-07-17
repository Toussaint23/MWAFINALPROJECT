import {Component} from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
  } from '@angular/forms';
import {user} from '../models/user';
import {ApiService} from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
selector: 'app-register',
templateUrl: '../templates/register.html'

})
export class RegisterComponent {
    registerPage: FormGroup;
    constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
        this.registerPage = formBuilder.group({
            'id': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
            'status': ['', Validators.required],
            'firstname': ['', Validators.required],
            'lastname': ['', Validators.required],
            'country': ['', Validators.required],
            'gender': ['', Validators.required],
            'mail': ['', Validators.compose([Validators.required, Validators.email])],
            'position': [''],
            'cname': [''],
            'cstate': [''],
            'ccity': [''],
            'rname': [''],
            'rstate': [''],
            'rcity': [''],
        });
    }

    onSubmit() {
        const newUser = user(this.registerPage.value);
       this.apiService.saveUser(newUser).subscribe((data) => {
            if (data.status === 200) {
              localStorage.setItem('token', data.message);
              this.registerPage.reset();
              alert(`Success: ${data.message}`);
           } else {
              alert(`Error ${data.status}: ${data.message}`);
           }
         });
    }
}
