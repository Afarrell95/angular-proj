import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('sample recipe', 'test','https://qph.cf2.quoracdn.net/main-qimg-4ec13e3cb9f15e30d0a4ac3524facd06-lq' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
