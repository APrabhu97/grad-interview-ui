import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Publication } from 'src/pojos/publication';
import { Student } from 'src/pojos/student';
import { UserService } from 'src/services/user.service';
import { AddPublicationComponent } from '../add-publication/add-publication.component';
import { AddStudentComponent } from '../add-student/add-student.component';

@Component({
  selector: 'app-student-dropdown',
  templateUrl: './student-dropdown.component.html',
  styleUrls: ['./student-dropdown.component.css'],
})
export class StudentDropdownComponent implements OnInit {
  students = new FormControl();

  studentsList: string[] = [];

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateStudentsList();
  }

  updateStudentsList() {
    this.userService.getAllStudents().subscribe((data: Student[]) => {
      this.studentsList = data.map(
        (student) => student.firstName + ' ' + student.lastName
      );
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: Student) => {
      this.userService.addStudent(result).subscribe((data) => {
        this.updateStudentsList();
      });
    });
  }

  openPublicationDialog() {
    const dialogRef = this.dialog.open(AddPublicationComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.userService
        .addPublication(result.studentID, { title: result.title, year: result.year })
        .subscribe((data) => {
          this.updateStudentsList();
        });
    });
  }
}
