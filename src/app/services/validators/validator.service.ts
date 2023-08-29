import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValid = emailRegex.test(control.value);

      return isValid ? null : { invalidEmail: { value: control.value } };
    };
  }

  mobileValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const mobileRegex = /^\+\d{1,3}\s\d{1,3}\s\d{1,10}$/;
      const isValid = mobileRegex.test(control.value);

      return isValid ? null : { invalidMobile: { value: control.value } };
    };
  }

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const nameRegex = /^[A-Za-z\s]+$/;
      const isValid = nameRegex.test(control.value);

      return isValid ? null : { invalidName: { value: control.value } };
    };
  }
}
