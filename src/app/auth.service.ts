import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtResponse } from './auth/jwt-response';
import { TokenStorageService } from './auth/token-storage.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  private baseUrl = environment.backendUrl + '/users';


  signUp(user): any {

    console.log('User: ' + user);
    return this.http.post<HttpResponse<Object>>(this.baseUrl + '/sign-up', user, {observe: 'response'});
  }

  logout() {
    this.tokenService.signOut();
  }

  isLoggedIn(): boolean {
    if (this.tokenService.getToken() !== null) {
      return true;
    } else {
      return false;
    }
  }

  login(credentials) {
    return this.http.post<JwtResponse>(this.baseUrl + '/signin', credentials, httpOptions)
    .pipe( map( resp => {
      if (resp.accessToken) {
        this.tokenService.saveToken(resp.accessToken);
        this.tokenService.saveUsername(resp.username);
        return true;
      }
    }));
  }


}
