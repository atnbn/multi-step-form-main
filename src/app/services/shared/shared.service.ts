import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private numberSource = new BehaviorSubject<number>(1);
  number$ = this.numberSource.asObservable();

  private planData: any;
  private addonData: any;

  setNumber(newValue: number) {
    this.numberSource.next(newValue);
  }

  sendPlanDataToComponent(data: any) {
    this.planData = data;
  }
  sendAddonDataToComponent(data: any) {
    this.addonData = data;
  }

  getAddonData(): any {
    return this.addonData;
  }

  getPlanData(): any {
    return this.planData;
  }
}
