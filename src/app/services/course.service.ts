import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = environment.backendUrl + '/courses';

  constructor(private http: HttpClient) { }

  getCourses() {
    // tslint:disable-next-line:prefer-const
    // let x = [{name: 'Fatma'}, {name: 'Eman'}];
    // return x;
    return this.http.get(this.baseUrl, { responseType: 'json' })
    .pipe(
      map(response => {
        console.log('Orders: ', response);
          return JSON.parse(JSON.stringify(response));
      })
    );
    // .subscribe(
    //   result => {
    //     // console.log(result.toString());
    //   }
    // );
  }

  deleteCourse(courseId: number) {
    // throw new Error("Method not implemented.");
    return this.http.delete(this.baseUrl + '/' + courseId);
  }

  addCourse(course): Observable<any> {
    // throw new Error("Method not implemented.");
    return this.http.post(this.baseUrl, course);
  }
}
