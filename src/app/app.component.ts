import {Component, OnInit} from '@angular/core';
import { OverlayContainer} from '@angular/material';
import { UserService } from './user.service';

@Component({
  selector: 'amte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
   title = 'OLCS';
   theme = 'my-theme-margo';
   heightExp = window.innerHeight - 64;

  constructor(
    private overlayContainer: OverlayContainer,
    private user: UserService
  ) {
  }
  ngOnInit(): void {
    this.overlayContainer.themeClass = this.theme;
  }

  onThemeChange() {
    this.overlayContainer.themeClass = this.theme;
  }
}



