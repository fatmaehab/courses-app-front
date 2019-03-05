import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course = {};

  constructor(private service: CourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  addCourse( element: HTMLInputElement) {
    console.log(element.value);
    this.service.addCourse(element.value).subscribe(result => {
      this.router.navigateByUrl('/courses');
    });
  }

}
