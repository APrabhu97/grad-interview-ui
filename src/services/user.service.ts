import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from 'src/pojos/publication';
import { Student } from 'src/pojos/student';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getAllStudents(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/users');
  }

  public addStudent(student: Student): Observable<any> {
    return this.httpClient.post('http://localhost:8080/user/add', student);
  }

  public addPublication(id: string, publication: Publication): Observable<any> {
    return this.httpClient.post(
      `http://localhost:8080/publication/add?studentId=${id}`,
      publication
    );
  }
}
