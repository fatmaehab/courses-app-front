import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {};
  invalidLogin =  false;
  errorMessage: any;

  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login(loginCredentials) {

    this.authService.login(loginCredentials).subscribe(
      loggedIn => {
        console.log('Data: ' + loggedIn);
        if (loggedIn) {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          console.log('url: ' + returnUrl);
          this.router.navigate([returnUrl || '/']);
        } else {
          this.invalidLogin = true;
        }
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.invalidLogin = true;
      }
    );
  }

  navigateSignUp() {
    this.router.navigate(['/signup']);
  }
}
