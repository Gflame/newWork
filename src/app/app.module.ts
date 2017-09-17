import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdCardModule,
  MdButtonModule,
  MdSelectModule,
  MdSidenavModule,
  MaterialModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,

} from '@angular/material';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ChartsModule} from 'ng2-charts';
import { Ng2TableModule } from 'ng2-table/ng2-table';


@NgModule({
  declarations: [AppComponent, DashboardComponent, LoginComponent, ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdSelectModule,
    MdSidenavModule,
    MaterialModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    ChartsModule,
    Ng2TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

