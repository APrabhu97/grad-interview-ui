import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  studentID = "";
  title = "";
  year = "";
  constructor(public dialogRef: MatDialogRef<AddPublicationComponent>) { }

  ngOnInit(): void {
  }

  isButtonDisabled() {
    if (
      this.studentID.length > 0 &&
      this.title.length > 0 &&
      this.year.length > 0
    ) {
      return false;
    }
    return true;
  }

  onSubmitClick(){
    this.dialogRef.close({
      studentID: this.studentID,
      title: this.title,
      year: this.year
    });
  }

}
