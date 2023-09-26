import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FoodEntry } from '../food-entry';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-epicerie-element',
  templateUrl: './liste-epicerie-element.component.html',
  styleUrls: ['./liste-epicerie-element.component.css']
})
export class ListeEpicerieElementComponent implements OnInit, OnDestroy {
  @Input()
  food: FoodEntry | undefined;
  selected = false;
  subscription: Subscription | undefined;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.subscription = this.notificationService.selectedElement.subscribe(newFood => {
      this.selected = newFood === this.food ? true : false;
    });
  }

  getFoodName(): string {
    return `${this.food!.name}`;
  }

  supprimer(event: Event): void {
    // Find the parent element (the row containing the button)
    const parentElement = (event.target as HTMLElement).parentElement;

    // Check if the parent element exists and remove it
    if (parentElement) {
      parentElement.remove();
    }
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }
}
