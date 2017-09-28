import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
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
import { FilterPipe, SortByPipe } from './component/pipes';
import { TableComponent } from './component/table-component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewTableComponent } from './component/new-table.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortByPipe,
    DashboardComponent,
    LoginComponent,
    TableComponent,
    NewTableComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
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
    Ng2SmartTableModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

