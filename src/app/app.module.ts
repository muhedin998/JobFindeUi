import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { LoginComponent } from './ui/pages/login/login.component';
import { RegisterComponent } from './ui/pages/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./core/store/reducers/app.reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {provideRouter} from "@angular/router";
import {MyInterceptor} from "./config/auth.interceptors";

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
        StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode,
            autoPause: true
        }),
    ],
  providers: [    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
