import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test1',
      "It's just a test recipe.",
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 10)
      ]
    ),
    new Recipe(
      'Test2',
      "It's just a test recipe.",
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Apple', 13),
        new Ingredient('Cheese', 1)
      ]
    )]

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
