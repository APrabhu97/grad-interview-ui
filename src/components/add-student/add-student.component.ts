import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  constructor(public dialogRef: MatDialogRef<AddStudentComponent>) {}

  ngOnInit(): void {}

  isButtonDisabled() {
    if (
      this.firstName.length > 0 &&
      this.lastName.length > 0 &&
      this.email.length > 0
    ) {
      return false;
    }
    return true;
  }

  onSubmitClick(){
    this.dialogRef.close({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    });
  }
}
