import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrl: './recipies.component.css',
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
  selectedRecipe: (Recipe | null) = null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    })
  }
}
