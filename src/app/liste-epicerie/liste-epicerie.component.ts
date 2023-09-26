import { Component } from '@angular/core';
import { FoodEntry } from './food-entry';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-liste-epicerie',
  templateUrl: './liste-epicerie.component.html',
  styleUrls: ['./liste-epicerie.component.css'],
  providers: [NotificationService]
})
export class ListeEpicerieComponent {
  foods: FoodEntry[] = [];
  currentFood: FoodEntry | null = null;
  constructor(private notificationService: NotificationService) { }
  select(foods: FoodEntry): void {
    this.currentFood = foods;
    this.notificationService.selectionChanged(foods);
  }

  addFood(newFoodName: string): void {
    if (newFoodName.trim() !== '') { // Check if the input is not empty
      const newFood = new FoodEntry(newFoodName);
      this.foods = [newFood, ...this.foods];
      this.select(newFood);
    }
  }

  deleteCurrent(): void {
    this.foods = this.foods.filter((foods: FoodEntry) => foods !== this.currentFood);
    this.currentFood = null;
  }

}
