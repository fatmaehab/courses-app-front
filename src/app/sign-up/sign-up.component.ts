import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = {};
  invalidConfirm = false;
  errorMessage: any;
  invalidSignup: boolean;

  constructor(private userService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUp(userData) {
    let userRegistered = false;
    if ( userData.password !== userData.confirmPassword) {
      this.invalidConfirm = true;
    } else {
      this.userService.signUp({ username: userData.username, password: userData.password})
      .subscribe( resp => {
        console.log(resp);
        if (resp.status === 200) {
          this.router.navigate(['/success-registeration']);
        }
      },
      error => {
        console.log(error);
          this.errorMessage = error.error.message;
          this.invalidSignup = true;
      });
    }
  }
}
