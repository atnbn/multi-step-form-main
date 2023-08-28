import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component {
  constructor(private sharedService: SharedService) {}

  onSubmit() {
    this.sharedService.setNumber(3);
    console.log('test');
  }
}
