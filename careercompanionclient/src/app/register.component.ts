import {Component} from '@angular/core';

@Component({
selector:'register',
template:
`
<mat-card>    
    <!-- Title of an Card -->    
    <mat-card-title>    
        create account and start to connect for your Dream Job    
    </mat-card-title>    
    
    <mat-card-content>    
        <form>    
            <table>    
                <tr>    
                    <td>    
                        <mat-form-field class="demo-full-width">    
                            <input matInput placeholder="First Name">    
                        </mat-form-field>    
                    </td>    
                    <td>    
                        <mat-form-field class="demo-full-width">    
                            <input matInput placeholder="Last Name">    
                        </mat-form-field>    
                    </td>    
                </tr>    
                <tr>    
                    <td colspan="2">    
                        <mat-form-field class="demo-full-width">    
                            <textarea matInput placeholder="Address" matTextareaAutosize matAutosizeMinRows="2" matAutosizeMaxRows="5"></textarea>    
                        </mat-form-field>    
                    </td>    
                </tr>    
                <tr>    
                    <td colspan="2">    
                        <mat-form-field class="demo-full-width">    
                            <input matInput [matDatepicker]="picker" placeholder="Date of birth">    
                            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>    
                            <mat-datepicker touchUi="true" #picker></mat-datepicker>    
                        </mat-form-field>    
                    </td>    
                </tr>    
                <tr>    
                    <td>    
                        <span>Gender</span><br><br>    
                        <mat-radio-group>    
                            <mat-radio-button value="1">Male</mat-radio-button>    
                            <mat-radio-button value="2">Female</mat-radio-button>    
                        </mat-radio-group>    
                    </td>    
                    <td><br>      
                    </td>    
                </tr>    
                <tr>    
                    <td colspan="2">    
                        <mat-form-field class="demo-full-width">    
                            <input matInput placeholder="Email">    
                        </mat-form-field>    
                    </td>    
                </tr>    
                <tr>    
                    <td colspan="2">    
    
                    </td>    
                </tr>    
                <tr>    
                    <td colspan="2" class="content-center">    
                        <button mat-raised-button color="accent">Submit</button>    
                        <button mat-raised-button color="accent">Clear</button>    
                    </td>    
                </tr>    
            </table>    
        </form>    
    </mat-card-content>
`

})
export class RegisterComponent{

}