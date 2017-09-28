import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MdToolbarModule} from '@angular/material';
import {error} from "util";


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
    this.router.navigate(['dashboard']);
    const username = e.target.element[1].value;
    const password = e.target.element[2].value;

    if ( username === 'admin' && password === 'pass') {

     this.router.navigate(['/dashboard']);
    }
    console.log(username, password);

   }
}
