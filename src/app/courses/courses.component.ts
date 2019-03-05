import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses = [{name: 'Fatma'}, {name: 'Eman'}];
  constructor(private service: CourseService) { }

  ngOnInit() {
    // this.service.getCourses().subscribe();
    // tslint:disable-next-line:prefer-const
     this.getCourses();
    console.log(this.courses);
  }

  getCourses() {
    this.service.getCourses().subscribe(result => {
      // console.log(result);
      this.courses = result;
    });
  }
  deleteCourse(courseId) {
    console.log('course id:' + courseId);
    this.service.deleteCourse(courseId).subscribe( result => {
      this.getCourses();
    });
  }

}
