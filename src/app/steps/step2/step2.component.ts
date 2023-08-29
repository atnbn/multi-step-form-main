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
  plan1: Plan = {
    planType: 'Arcade',
    pricingMonthly: 9,
    pricingYearly: 90,
  };
  plan2: Plan = {
    planType: 'Advanced',
    pricingMonthly: 12,
    pricingYearly: 120,
  };
  plan3: Plan = {
    planType: 'Pro',
    pricingMonthly: 15,
    pricingYearly: 150,
  };

  constructor(private sharedService: SharedService) {}

  onSubmit() {
    if (this.currentPlan > 0) this.sharedService.setNumber(3);
  }

  setSubscriptionType(): void {
    if (!this.yearly) {
      this.yearly = true;
    } else {
      this.yearly = false;
    }
  }
  test(plan: number) {
    this.currentPlan = plan;
  }

  goBack() {
    this.sharedService.setNumber(1);
  }
}
