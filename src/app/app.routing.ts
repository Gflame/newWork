import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {AuthguardGuard} from './authguard.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard',  canActivate: [AuthguardGuard], component: DashboardComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
