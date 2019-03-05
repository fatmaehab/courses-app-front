import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
  { path: 'courses/enroll/:courseId', component: CoursesComponent},
  { path: 'courses/course-details/:id', component: CourseDetailsComponent},
  { path: 'courses/course-details', component: CourseDetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'success-registeration', component: SuccessRegisterComponent},
  { path: 'no-access', component: NoAccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
