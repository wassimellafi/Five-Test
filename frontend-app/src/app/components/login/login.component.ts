import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  username: string;
  password: string;
  itemss: any = [];
  constructor(private routeur: Router,
              private Service: ServiceService,
              private authService: AuthService,
  ) {
    this.isLoggedIn = authService.isLoggedIn();
  }
  ngOnInit() {
    this.itemss = this.Service.getItems();
    if ( this.isLoggedIn ) {
      this.routeur.navigate(['/creersondages']);
    }
  }
  login(): void {
    // tslint:disable-next-line: max-line-length
    const found = this.itemss.find(element => element.username === this.username &&
      element.password === this.password
    );
// tslint:disable-next-line: triple-equals
    if (found != undefined && found != null) {
     this.authService.setToken('azerty');
     this.routeur.navigate(['/creersondages']);
    } else {
      alert('Identifiants invalides');
    }
  }


}
