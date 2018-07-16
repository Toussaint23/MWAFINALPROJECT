import { Component, OnInit } from '@angular/core';
import {QstService} from '../services/qst.service';

@Component({
  selector: 'app-iquestionlist',
  templateUrl: './iquestionlist.component.html',
  styleUrls: ['./iquestionlist.component.css']
})
export class IquestionlistComponent implements OnInit {

  constructor(private _QstService: QstService) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this._QstService.getQuestions();
  }
}
