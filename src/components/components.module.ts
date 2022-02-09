import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDropdownComponent } from './student-dropdown/student-dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { AddStudentComponent } from './add-student/add-student.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPublicationComponent } from './add-publication/add-publication.component';

@NgModule({
  declarations: [StudentDropdownComponent, AddStudentComponent, AddPublicationComponent],
  exports: [StudentDropdownComponent, AddStudentComponent],
  imports: [CommonModule, MatSelectModule, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
