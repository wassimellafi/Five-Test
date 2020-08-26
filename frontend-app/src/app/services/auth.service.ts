import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  isLoginSubject =  new BehaviorSubject<boolean>(this.hasToken( )) ;
  constructor() { }
  public isAuthenticated(): boolean {
    const token = this.getToken();
    // tslint:disable-next-line: triple-equals
    if (token != undefined && token != null) {
      return true;
    } else {
      return false;
    }
  }
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
    this.isLoginSubject.next(true);
  }
  getToken() {
   return localStorage.getItem('token');
  }
  clearToken() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }
isLoggedIn(): Observable<boolean> {
  return this.isLoginSubject.asObservable();
 }
}
