import { LoginService } from './../../core/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user = this.loginService.user;
  constructor(public loginService: LoginService) {}

  ngOnInit() {}

  googleLogin() {
    this.loginService.googleLogin();
  }

  singOut() {
    this.loginService.signOut();
  }
}
