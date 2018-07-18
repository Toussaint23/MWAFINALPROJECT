import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Student } from '../models/student';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from '../services/api.service';

@Component({
selector: 'app-studentslist',
templateUrl: '../templates/listStudentsHired.html',
styleUrls: ['../templates/listStudentsHired.css']

})
export class StudentsComponent implements OnInit {
    @Input() students: Student[];

    displayedColumns = ['lastName', 'firstName', 'mail', 'country', 'details_employment', 'position', 'recruiter'];
    dataSource: MatTableDataSource<Student>;

    constructor( private getStudentsSVC: ApiService) {
      this.getStudentsSVC.loadAll();
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit(): void {
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
}
