import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FoodEntry} from './food-entry';

@Injectable()
export class NotificationService {
  // Observable for selected elements
  selectedElement = new BehaviorSubject<FoodEntry | null>(null);
  constructor() { }

  public selectionChanged(address: FoodEntry): void {
    this.selectedElement.next(address);
  }
}
