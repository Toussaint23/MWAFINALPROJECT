import { Component, OnChanges, Input } from '@angular/core';
// import {FormArray, FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import {InterviewQ, Comment} from '../models/interview-q';
// import {IqserviceService} from '../iqservice.service';
import {QstService} from '../services/qst.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-question-detail',
  templateUrl: '../templates/question-detail.component.html',
  styleUrls: ['../resources/css/question-detail.component.css']
})
export class QuestionDetailComponent  {

  myForm: FormGroup;
  question = [];

  constructor(private formBuilder: FormBuilder,
     private _qstService: QstService
     , private _interviewQ: InterviewQ) {
      this.myForm = formBuilder.group({
      'category': ['', Validators.required],
      'companyname': ['', Validators.required],
      'questiontext': ['', Validators.required],
    });
    this.myForm.valueChanges.subscribe(
      (data: any) => {
        console.log(data);
      });
  }
  onSubmit() {
    const datas = {value: this.myForm.value, token: localStorage.getItem('token')};
    this._qstService.addQuestion(datas).subscribe((data) => {
      console.log(data);
        if (data.status === 200) {
          localStorage.setItem('token', data.token);
          this.myForm.reset();
          alert(`Success: ${data.message}`);
        } else {
          alert(`Error ${data.status}: ${data.message}`);
        }
      });
  }

  addQestion(form) {
    this._qstService.addQuestion(form);
  }
}
