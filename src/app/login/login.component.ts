import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MdToolbarModule} from '@angular/material';


@Component({
  selector: 'amte-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  loginUser(e) {
    var username = e.target.element[1].value;
    var password = e.target.element[2].value;
    console.log(username, password);
    // if (username == 'dev' && password == 'pass') {
    //  this.router.navigate(['dashboard']);
    // }

   }
}
