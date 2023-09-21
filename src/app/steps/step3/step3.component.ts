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
    const newCurrentPlan: any[] = [];

    this.addons.forEach((add) => {
      if (add.select) {
        newCurrentPlan.push(add);
      }
    });

    this.currentPlan = newCurrentPlan;
    this.sharedService.sendAddonDataToComponent(this.currentPlan);
    this.sharedService.setNumber(4);
  }

  onChange($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;

    // Find the index of the addon with the given id
    const addonIndex = this.addons.findIndex(
      (add: any) => add.id === Number(id)
    );

    if (addonIndex !== -1) {
      const selectedAddon = this.addons[addonIndex];
      selectedAddon.select = isChecked;
    }
  }
}
