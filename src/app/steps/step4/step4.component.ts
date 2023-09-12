import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { FinalObject } from './interface/finalObject';
import { Plan } from '../step2/interface/plan2-interface';
import { Addon } from '../step3/interface/addon';
import { Observable, combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {
  // addonData: any;
  // // finalObject: any[] = [];
  finalObject: FinalObject | null = null;
  finalSum: number = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    forkJoin({
      planData: this.sharedService.getPlanData() as Observable<Plan[]>,
      addonData: this.sharedService.getAddonData() as Observable<Addon[]>,
    }).subscribe(({ planData, addonData }) => {
      if (planData.length > 0) {
        const firstPlanData = planData[0];
        this.takePlanObject(firstPlanData);

        if (addonData.length > 0) {
          this.takeBothObjects(firstPlanData, addonData);
        } else {
          // Handle the case where addonData is empty
        }
      }
    });
  }

  goBack() {
    this.sharedService.setNumber(3);
  }

  onSubmit() {
    console.log('hello');
  }
  takePlanObject(planData: Plan) {
    if (planData) {
      const finalObject: FinalObject = {
        abotyp: planData.planType,
        duration: planData.yearly,
        price: planData.yearly
          ? planData.pricingYearly
          : planData.pricingMonthly,
      };
      this.finalObject = finalObject;
      this.finalSum = finalObject.price;
      console.log(this.finalObject?.duration);
    }
  }
  takeBothObjects(planData: Plan, addonData: Addon[]) {
    if (planData) {
      this.finalSum = 0;
      const finalObject: FinalObject = {
        abotyp: planData.planType,
        duration: planData.yearly,
        price: planData.yearly
          ? planData.pricingYearly
          : planData.pricingMonthly,
        addons: addonData, // Include addon data in the final object
      };

      if (planData.yearly) {
        addonData.forEach((data) => {
          data.price = data.price * 10;
          this.finalSum += data.price;
        });
      } else {
        addonData.forEach((data) => {
          this.finalSum += data.price;
        });
      }

      // Assign the final object to the class property
      this.finalObject = finalObject;
      this.finalSum += finalObject.price;
      console.log(finalObject);
      console.log(this.finalSum);
    }
  }
  goToStep2() {
    this.sharedService.setNumber(2);
  }
}
