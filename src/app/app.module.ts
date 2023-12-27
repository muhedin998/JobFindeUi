import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { LoginComponent } from './ui/pages/login/login.component';
import { RegisterComponent } from './ui/pages/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./core/store/reducers/app.reducers";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(appReducers)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }