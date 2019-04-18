import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
recipes: RecipeModel[] = [
  new RecipeModel('Spagetti al vongole', 'test',
    'https://www.ricettealvolo.it/wp-content/uploads/2018/01/spaghetti-alle-vongole-3.jpg' )
];

  constructor() { }

  ngOnInit() {
  }

}
