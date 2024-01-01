import { group } from "@angular/animations";
import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

export const passwordMatchValidator:ValidatorFn = (group: AbstractControl) : ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {passwordMismatch: true};
}

// export const usernameAndPasswordDoesntMatch = (group :AbstractControl) : ValidationErrors | null => {
//     const 
// }