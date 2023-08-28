import { Component } from '@angular/core';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public currentStep: number = 1;
  constructor(private sharedService: SharedService) {
    this.sharedService.number$.subscribe((value) => {
      this.currentStep = value;
      console.log(this.currentStep);
    });
  }
}
