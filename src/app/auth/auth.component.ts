import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/authService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
  onSignIn() {
    console.log(this.authService.isAuth);
    this.authService.signIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareilss']);
        console.log(this.authService.isAuth);
        console.log(this.authStatus);
      }
    );
  }
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    console.log(this.authStatus);
  }

}
