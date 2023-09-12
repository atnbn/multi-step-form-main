import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ValidatorService } from 'src/app/services/validators/validator.service';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component {
  savedName: any;
  constructor(
    private validatorService: ValidatorService,
    public sharedService: SharedService
  ) {
    this.savedName = localStorage.getItem('name');
    console.log(this.savedName);
  }
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
    return this.sharedService.setNumber(2);
  }
}
