import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  constructor(
    public authService: AuthService,
    private routeur: Router,
  ) {
    this.isLoggedIn = authService.isLoggedIn();
   }
  ngOnInit() {
  }
  logout() {
    this.authService.clearToken();
    this.routeur.navigate(['/login']);
  }
}
