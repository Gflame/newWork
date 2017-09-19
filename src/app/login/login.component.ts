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

    let username = e.target.element[0].value;
    let password = e.target.element[1].value;
    console.log(username, password);
    // if (username == '' && password == '') {
    //  this.router.navigate(['dashboard']);
    // }

   }
}
