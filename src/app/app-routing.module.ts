import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./ui/pages/home/home.component";
import {LoginComponent} from "./ui/pages/login/login.component";
import {RegisterComponent} from "./ui/pages/register/register.component";
import { AddJobListingComponent } from './ui/pages/add-job-listing/add-job-listing.component';
import { SearchComponent } from './ui/pages/search/search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'newlisting', component: AddJobListingComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
