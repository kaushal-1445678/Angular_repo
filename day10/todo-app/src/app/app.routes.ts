import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user.component';
import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // default page
  {path:'login',component:LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: NotFoundComponent } // wildcard route
];
