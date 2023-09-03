import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { FinalObject } from './interface/finalObject';
import { Plan } from '../step2/interface/plan2-interface';
import { Addon } from '../step3/interface/addon';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {
  planData: any;
  addonData: any;
  // finalObject: any[] = [];

  constructor(private sharedService: SharedService) {
    this.planData = this.sharedService.getPlanData();
    this.addonData = this.sharedService.getAddonData();
    console.log(this.planData, this.addonData);
    // this.finalObject.push(this.addonData, this.planData);
    // console.log(this.finalObject);
  }

  ngOnInit(): void {}

  goBack() {
    this.sharedService.setNumber(3);
  }

  onSubmit() {
    console.log('hello');
  }
}
