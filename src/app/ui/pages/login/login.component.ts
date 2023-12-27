import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Authenticate} from "../../../models/authenticate.model";
import {AuthenticateService} from "../../../services/authenticate.service";

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
    this.authServce.authenticateUser(authUser);
    console.log(authUser);
  }
}
