import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { RecipesApi } from '../../shared/shared';

import { RecipeDetailViewPage } from '../pages';
import { AuthData } from '../../shared/shared'

import { Recipe }    from '../../shared/recipe';

@Component({
  selector: 'page-edit-recipe',
  templateUrl: './edit-recipe.html'
})
export class EditRecipePage {

selectedRecipe: any;
categories: any;
model: any;
submitted: any;

constructor(public navCtrl: NavController, public navPam: NavParams, public viewCtrl: ViewController, private recipesApi: RecipesApi, private authorize: AuthData,) {
  this.selectedRecipe = this.navPam.data;

  this.categories = ['Foods', 'Desserts', 'Drinks'];

  this.model = new Recipe(this.selectedRecipe.title, 
                          this.selectedRecipe.note, 
                          this.selectedRecipe.icon, 
                          this.selectedRecipe.category, 
                          this.convertToLines(this.selectedRecipe.ingredients), 
                          this.convertToLines(this.selectedRecipe.directions), 
                          this.selectedRecipe.author,
                          this.selectedRecipe.recipeKey);
  this.submitted = false;

}

  onSubmit() { 
      this.submitted = true; 
      this.model.ingredients = this.convertToArray(this.model.ingredients);
      this.model.directions = this.convertToArray(this.model.directions);
      this.model.author = this.authorize.getCurrentUser().uid;
      this.assignIconToCategory();
      this.recipesApi.editRecipe(this.model);
      this.navCtrl.push(RecipeDetailViewPage, this.model).then(() => {
        // first we find the index of the current view controller:
        const index = this.viewCtrl.index;
        // then we remove it from the navigation stack
        this.navCtrl.remove(index);
        this.navCtrl.remove(index-1);
      });
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

  convertToLines(arrayText) {
    return arrayText.join("\n");
  }

  assignIconToCategory() {
    if(this.model.category === 'Foods'){
      this.model.icon = 'restaurant';
    }
    else if(this.model.category === 'Drinks'){
      this.model.icon = 'cafe';
    }
    else if(this.model.category === 'Desserts'){
      this.model.icon = 'ice-cream';
    }
    else {
      this.model.icon = 'star';
    }
  }

}





