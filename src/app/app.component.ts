import { Component } from '@angular/core';
import { SharedService } from './services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentStep: number = 1;
  title = 'multi-step-form-main';
  constructor(public sharedService: SharedService) {
    this.sharedService.number$.subscribe((value) => {
      this.currentStep = value;
    });
  }
}
