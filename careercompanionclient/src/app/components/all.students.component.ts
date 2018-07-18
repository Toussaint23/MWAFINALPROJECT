import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Student } from '../models/student';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from '../services/api.service';

@Component({
selector: 'app-studentslist',
templateUrl: '../templates/listStudents.html',
styleUrls: ['../templates/listStudents.css']

})
export class AllStudentsComponent implements OnInit {
    @Input() students: Student[];

   // displayedColumns = ['lastName', 'firstName', 'mail', 'country', 'details_employment', 'position', 'recruiter'];
    displayedColumns = ['lastName', 'firstName', 'mail', 'country'];
    dataSources: MatTableDataSource<Student>;

    constructor( private getStudentsSVC: ApiService) {
      this.getStudentsSVC.loadAllStudent();
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit(): void {
      this.dataSources.paginator = this.paginator;
      this.dataSources.sort = this.sort;
    }

    ngOnInit() {
        console.log(this.students);
      this.dataSources = new MatTableDataSource<Student>(this.getStudentsSVC.dataStores.students);
    }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSources.filter = filterValue;
    }
}
