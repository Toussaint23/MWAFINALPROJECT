import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Student } from '../models/student';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
selector: 'StudentsList',
templateUrl:'../templates/listStudentsHired.html',
styleUrls: ['../templates/listStudentsHired.css']

})
export class StudentsComponent implements OnInit {
    
    @Input() students: Student[];
    

    displayedColumns = ['_id', 'lastName', 'firstName', 'mail', 'country'];
    dataSource: MatTableDataSource<Student>;
  
    constructor( private getStudentsSVC:ApiService) { 
      this.getStudentsSVC.loadAll();
    }
   
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    ngOnInit() {
        console.log(this.students);
      this.dataSource = new MatTableDataSource<Student>(this.getStudentsSVC.dataStore.students);
    }
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }

    
  /* {
    
    students: Observable<Student[]>;

  constructor(
    zone: NgZone, 
    private studentService: ApiService,
    private router: Router) {

  }

  ngOnInit() {
    this.students = this.studentService.students;
    this.studentService.loadAll();
    this.students.subscribe(
        data => {
          console.log(data);
        });
  }

} */
}
