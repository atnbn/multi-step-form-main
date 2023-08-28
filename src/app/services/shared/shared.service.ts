import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private numberSource = new BehaviorSubject<number>(1);
  number$ = this.numberSource.asObservable();

  setNumber(newValue: number) {
    this.numberSource.next(newValue);
  }
}
