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
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent  {

  myForm: FormGroup;
  question = [];

  constructor(private formBuilder: FormBuilder,
     private _qstService: QstService
     , private _interviewQ: InterviewQ) {
      this.myForm = formBuilder.group({
      // 'questionData': formBuilder.group({
      'category': ['', [Validators.required]], // , this.Validator]],
      'companyname': ['', [Validators.required]], // this.Validator]],
      'questiontext': ['', [Validators.required]] , //  this.Validator]]
    //  })
    });
    this.myForm.valueChanges.subscribe(
      (data: any) => {
        console.log(data);
      });
  }
  onSubmit(form: NgForm) {
    console.log('form', form);
    console.log('myForm' , this.myForm);
    this.addQestion(form);
  }

  addQestion(form) {
    // form.subscribe((interviewData: any) => {
    //   console.log('interviewData ' , interviewData);
    //  // this._interviewQ.category = interviewData.
    // });
    this._qstService.addQuestion(this.question);
  }


  // Validator(control: FormControl): { [s: string]: boolean } {
  //   if (control.value === null) {
  //     return {'invalid': true};
  //   }
  //   return { contValue: true };
  // }

// @Input() interviewQ: InterviewQ;
// interviewQuestionForm: FormGroup;

// constructor(private _formBuilder: FormBuilder, private iqserviceService: IqserviceService) { }
// createForm() {
//   this.interviewQuestionForm = this._formBuilder.group({
//     category: '', comapanyname : '', question : '', commentsArray: this._formBuilder.array([]) });
// }
// ngOnChanges() {
//   this.rebuildForm();
// }
// rebuildForm() {
//   console.log(this.interviewQ.category);
//     this.interviewQuestionForm.reset({
//     category : this.interviewQ.category,
//     comapanyname: this.interviewQ.comapanyname,
//     question: this.interviewQ.questiontext});
//     this.setComments(this.interviewQ.comments);
// }

// get commentsArray(): FormArray {
//   return this.interviewQuestionForm.get('commentsArray') as FormArray;
// }
// setComments(comments: Comment[]) {
// const commentFormGroups = comments.map(comment => this._formBuilder.group(comment));
// const commentFormArray = this._formBuilder.array(commentFormGroups);
// this.interviewQuestionForm.setControl('commentsArray', commentFormArray);
// }

// onSubmit() {
//   this.interviewQ = this.prepareSaveInterviewQ();
//   this.iqserviceService.updateInterviewQ(this.interviewQ).subscribe();
//   this.rebuildForm();
// }

// addCommentControl() {
//  // this.commentsArray.push(this._formBuilder.group(new Comment()));
// }
// prepareSaveInterviewQ(): InterviewQ {
//   const formsModel = this.interviewQuestionForm.value;
//   const myCopy: Comment[] = formsModel.comments.map((comment: Comment) => Object.assign({}, comment));

// const saveInterviewQ: InterviewQ = {
//   id: formsModel.id as number,
//     firstname: formsModel.firstname as string,
//     lastname: formsModel.lastname as string,
//     email: formsModel.email as string,
//     date: formsModel.date as string,
//     category : formsModel.category as string,
//     comapanyname: formsModel.comapanyname as string,
//     questiontext: formsModel.questiontext as string,
//     comments: myCopy
//   };
//   return saveInterviewQ;
// }
}
