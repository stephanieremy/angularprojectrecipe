import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import index from '@angular/cli/lib/cli';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pasta alla norma',
      'A sicilian classic!',
      'https://static01.nyt.com/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg',
      [
        new Ingredient('aubergines', 2),
        new Ingredient('canned tomatoes', 2),
        new Ingredient('spaghettis', 1),
        new Ingredient('oregano', 1),
        new Ingredient('garlic', 4),
        new Ingredient('basil', 1),
        new Ingredient('white wine', 1),
        new Ingredient('ricotta', 1),
      ]),
    new Recipe('Pear Sorbet',
      'Refreshing',
      'https://i1.wp.com/www.compelledtocook.com/wp-content/uploads/2018/05/Ginger-Pear-Sorbet-067-e1549837271236.jpg?resize=1080%2C675&ssl=1',
      [
        new Ingredient('Pears', 6),
        new Ingredient('sugar', 1),
        new Ingredient('water', 1),
        new Ingredient('lemon', 1),
        new Ingredient('grappa', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
