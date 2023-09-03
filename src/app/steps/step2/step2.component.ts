import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Plan } from './interface/plan2-interface';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component {
  yearly: boolean = false;
  disabled: boolean = false;
  currentPlan: number = 0;
  currentObject: any[] = [];
  plans: Plan[] = [
    {
      planType: 'Arcade',
      pricingMonthly: 9,
      pricingYearly: 90,
      yearly: false,
      url: '../assets/images/icon-arcade.svg',
      id: 1,
    },
    {
      planType: 'Advanced',
      pricingMonthly: 12,
      pricingYearly: 120,
      yearly: false,
      url: '../assets/images/icon-advanced.svg',
      id: 2,
    },
    {
      planType: 'Pro',
      pricingMonthly: 15,
      pricingYearly: 150,
      yearly: false,
      url: '../assets/images/icon-pro.svg',
      id: 3,
    },
  ];

  constructor(private sharedService: SharedService) {}

  onSubmit() {
    if (this.currentPlan > 0) {
      let overall: any[] = [];
      this.plans.forEach((add) => {
        if (this.currentPlan === add.id) {
          if (this.yearly) {
            add.yearly = true;
          } else {
            add.yearly = false;
          }
          overall.push(add);
        }
        this.currentObject = overall;
        this.sharedService.sendPlanDataToComponent(this.currentObject);
      });
      this.sharedService.setNumber(3);
    }
  }

  setSubscriptionType(): void {
    if (!this.yearly) {
      this.yearly = true;
    } else {
      this.yearly = false;
    }
  }

  addPlan(plan: number) {
    this.currentPlan = plan;
  }

  goBack() {
    this.sharedService.setNumber(1);
  }
}
