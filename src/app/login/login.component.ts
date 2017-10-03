import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';



@Component({
  selector: 'amte-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username = '';
 password = '';

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {

  }
  loginUser(e) {
    e.preventDefault();
    this.username = e.srcElement[0].value;
    this.password = e.srcElement[1].value;
    if ( this.username == 'admin' && this.password == 'pass') {
      this.user.setUserLoggedIn();
      this.router.navigate(['/dashboard']);
    }
   }
}
