import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipesApi } from '../../shared/shared';

import { RecipeDetailViewPage } from '../pages';

import { Recipe }    from '../../app/recipe';

@Component({
  selector: 'page-add-new-recipe',
  templateUrl: './add-new-recipe.html'
})
export class AddNewRecipePage {


constructor(public navCtrl: NavController, private recipesApi: RecipesApi) {}

  categories = ['Foods', 'Desserts', 'Drinks'];

  model = new Recipe('', '', '', '', [], []);

  submitted = false;

  onSubmit() { 
      this.submitted = true; 
      console.log("Submit the new recipe: "+ this.model.title);
      this.recipesApi.postNewRecipe(this.model);

      this.navCtrl.push(RecipeDetailViewPage, this.model);

}








}