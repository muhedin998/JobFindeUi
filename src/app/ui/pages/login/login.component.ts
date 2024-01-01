import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Authenticate} from "../../../models/authenticate.model";
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(private authServce: AuthenticateService) {
  }
  ngOnInit(): void {
  }

  onSubmit() {
    let authUser: Authenticate = this.form.getRawValue();
    this.authServce.authenticateUser(authUser).subscribe((response: HttpResponse<any>) => 
    console.log(response.status),
    (err: HttpErrorResponse) => {
      if (err.status != 200) {
        this.form.get('password')?.setErrors({ serverError: 'Bad request' });
      }
    }
    )
  }
}
