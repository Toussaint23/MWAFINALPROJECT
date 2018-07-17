import { Component, OnInit } from '@angular/core';
import { QstService} from '../services/qst.service';

@Component({
  selector: 'app-viewquestion',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})
export class ViewquestionComponent implements OnInit {

  constructor(private _QstService: QstService) { }

  ngOnInit() {
  }

  viewQuestion(id) {
    this._QstService.getQuestionsById(id);
  }
}
