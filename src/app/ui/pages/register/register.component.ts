import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {passwordMatchValidator} from "./matchpassword.validators";
import {UserService} from "../../../services/user.service";
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    fullName: ['', (Validators.required)],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  },
      { validators: passwordMatchValidator}
  );
  ngOnInit(): void {
  }
  constructor(private userService: UserService) {
  }

  onSubmit() {

    this.form.markAllAsTouched()
    console.log(this.form.getRawValue())
    if (!this.form.valid) {
      console.error("***ERROR FORM NOT VALID***");
    } else {
      this.userService.registerUser(this.form.getRawValue() as unknown as UserModel)
      console.log("***GREAT FORM IS VALID***")
    }
  }

  isFieldInvalid(fieldName: string) {
    const control = this.form.get(fieldName);
    return control?.invalid && (control?.dirty || control?.touched);
  }
}
