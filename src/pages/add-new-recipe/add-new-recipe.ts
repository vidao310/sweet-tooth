import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipesApi } from '../../shared/shared';

import { RecipeDetailViewPage } from '../pages';
import { AuthData } from '../../shared/shared'

import { Recipe }    from '../../shared/recipe';

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
      this.assignIconToCategory();
      var recipeKey = this.recipesApi.postNewRecipe(this.model);
      this.model.recipeKey = recipeKey;
      this.navCtrl.push(RecipeDetailViewPage, this.model);
  }

  convertToArray(stringText) {
    var lines;  
    if(stringText != ''){
      lines = stringText.split("\n");
    } else {
      lines = stringText;
    }
    lines = this.cleanArray(lines);
    return lines;
  }

  cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

  assignIconToCategory() {
    if(this.model.category = 'Foods'){
      this.model.icon = 'restaurant';
    }
    else if(this.model.category = 'Drinks'){
      this.model.icon = 'cafe';
    }
    else if(this.model.category = 'Desserts'){
      this.model.icon = 'ice-cream';
    }
    else {
      this.model.icon = 'star';
    }
  }

}





