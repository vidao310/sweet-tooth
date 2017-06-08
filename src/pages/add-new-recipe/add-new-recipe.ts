import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipesApi } from '../../shared/shared';

import { RecipeDetailViewPage } from '../pages';
import { AuthData } from '../../shared/shared'

import { Recipe }    from '../../app/recipe';

@Component({
  selector: 'page-add-new-recipe',
  templateUrl: './add-new-recipe.html'
})
export class AddNewRecipePage {


constructor(public navCtrl: NavController, private recipesApi: RecipesApi, private authorize: AuthData) {}

  categories = ['Foods', 'Desserts', 'Drinks'];

  model = new Recipe('', '', '', '', [], [], '');

  submitted = false;

  onSubmit() { 
      this.submitted = true; 
      console.log("Submit the new recipe: "+ this.model.title);
      this.model.ingredients = this.convertToArray(this.model.ingredients);
      this.model.directions = this.convertToArray(this.model.directions);
      this.model.author = this.authorize.getCurrentUser().uid;
      this.recipesApi.postNewRecipe(this.model);

      this.navCtrl.push(RecipeDetailViewPage, this.model);
  }

  convertToArray(stringText) {
    var lines = stringText.split("\n");
    return lines;
  }

}





