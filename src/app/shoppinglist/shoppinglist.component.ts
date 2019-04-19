import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.mdoel';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('tomatoes', 5),
    new Ingredient('spaghetti', 10),
    new Ingredient('basil', 5),
    new Ingredient('clams', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

}
