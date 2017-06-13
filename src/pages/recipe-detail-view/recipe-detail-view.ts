import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthData } from '../../shared/shared'
import { EditRecipePage } from '../pages';

@Component({
  selector: 'page-recipe-detail-view',
  templateUrl: 'recipe-detail-view.html',
})
export class RecipeDetailViewPage {

  selectedRecipe: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private authorize: AuthData) {
    this.selectedRecipe = this.navParams.data;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailViewPage');
  }

  checkRecipeAuthor() {
    if (this.selectedRecipe.author === this.authorize.getCurrentUser().uid) {
      return true;
    }
    else { return false; }
  }

  favoriteRecipe() {
    console.log('TODO Favorite recipe');
  }
  editRecipe() {
    console.log('TODO edit recipe screen');
    console.log(this.selectedRecipe);
    console.log(this.selectedRecipe.recipeKey);
    this.navCtrl.push(EditRecipePage, this.selectedRecipe).then(() => {
        const index = this.viewCtrl.index;
        this.navCtrl.remove(index);
      });
  
  }

  deleteRecipe() {
    console.log('TODO delte recipe');
  }

}
