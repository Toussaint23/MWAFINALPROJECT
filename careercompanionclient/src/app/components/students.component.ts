import {Component} from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
selector: 'StudentsList',
template:
`
<mat-form-field>
  <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
</mat-form-field>

<div class="mat-elevation-z8">
  <table mat-table [dataSource]="students" matSort>

    <!-- ID Column -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
      <td mat-cell *matCellDef="let row"> {{apiService.students[0].id}} </td>
    </ng-container>

    <!-- Progress Column -->
    <ng-container matColumnDef="progress">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>
      <td mat-cell *matCellDef="let row"> {{apiService.students[0].firstName}}% </td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
      <td mat-cell *matCellDef="let row"> {{apiService.students[0].email}} </td>
    </ng-container>

    <!-- Color Column -->
    <ng-container matColumnDef="color">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>
      <td mat-cell *matCellDef="let row" [style.color]="yellow"> {{apiService.students[0].status}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;">
    </tr>
  </table>

  <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
</div>

`

})
export class StudentsComponent {

   constructor(private apiService: ApiService){}

    ngOnInit(){
        this.apiService.getStudents();
    }
}
