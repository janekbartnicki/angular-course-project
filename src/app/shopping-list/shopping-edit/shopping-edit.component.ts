import {Component} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  itemName: string;
  itemAmount: number;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    this.shoppingListService.addIngredient(new Ingredient(
      this.itemName,
      this.itemAmount
    ))
  }
}
