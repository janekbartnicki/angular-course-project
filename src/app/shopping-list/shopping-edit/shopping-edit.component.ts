import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() itemAdded = new EventEmitter<Ingredient>();

  itemName: string;
  itemAmount: number;

  onAddItem() {
    this.itemAdded.emit(new Ingredient(this.itemName, this.itemAmount));
  }
}
