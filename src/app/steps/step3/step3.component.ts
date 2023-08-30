import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Addon } from './interface/addon';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component {
  currentPlan: any[] = [];
  addons: Addon[] = [
    {
      id: 1,
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: 1,
      select: false,
    },
    {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
      select: false,
    },
    {
      id: 3,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: 2,
      select: false,
    },
  ];
  constructor(private sharedService: SharedService) {}

  goBack() {
    this.sharedService.setNumber(2);
  }

  onSubmit() {
    // this.sharedService.setNumber(4);
    this.addons.forEach((add) => {
      if (add.select && !this.currentPlan.some((plan) => plan.id === add.id)) {
        this.currentPlan.push(add);
      } else if (!this.currentPlan.find((plan) => plan.id === add.id)) {
      }
    });
    console.log(this.currentPlan);
  }

  onChange($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    this.addons.map((add: any) => {
      if (add.id === Number(id)) {
        add.select = true;
      }
    });
  }
}
