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
    'https://www.ricettealvolo.it/wp-content/uploads/2018/01/spaghetti-alle-vongole-3.jpg' ),
  new RecipeModel('Trofie al pesto', 'test',
    'https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/trofie-al-pesto-2460109/38727280-1-fre-FR/Trofie-al-pesto.jpg' )
];

  constructor() { }

  ngOnInit() {
  }

}
