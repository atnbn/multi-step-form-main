import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ValidatorService } from 'src/app/services/validators/validator.service';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component {
  formSubmitted = false;

  constructor(
    private validatorService: ValidatorService,
    public sharedService: SharedService
  ) {}

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      this.validatorService.nameValidator,
    ]),
    email: new FormControl('', [
      Validators.required,
      this.validatorService.emailValidator(),
    ]),
    mobile: new FormControl('', [
      Validators.required,
      this.validatorService.mobileValidator(),
    ]),
  });
  onSubmit() {
    this.formSubmitted = true;
    return this.sharedService.setNumber(2);
  }

  onClick(event: Event) {
    const target = event.target as HTMLElement;
    target.classList.remove('invalid');
    target.classList.add('active');
  }

  onBlur(event: Event) {
    const target = event.target as HTMLElement;
    target.classList.remove('active');

    if (target.id === 'name' && this.contactForm.controls['name'].invalid) {
      target.classList.add('invalid');
    }

    if (target.id === 'email' && this.contactForm.controls['email'].invalid) {
      target.classList.add('invalid');
    }

    if (target.id === 'mobile' && this.contactForm.controls['mobile'].invalid) {
      target.classList.add('invalid');
    }
  }
}
