import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthData, RecipesApi, SqliteService } from '../../shared/shared'
import { EditRecipePage, AllRecipesList } from '../pages';

@Component({
  selector: 'page-recipe-detail-view',
  templateUrl: 'recipe-detail-view.html',
})
export class RecipeDetailViewPage {

  selectedRecipe: any;
  favorite: boolean;
  favoriteIcon: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private authorize: AuthData, private recipeApi: RecipesApi, private sqlite: SqliteService) {
    this.selectedRecipe = this.navParams.data;
    
    this.checkFavorite().then(result => {
      this.favorite = result.favorite;
      this.favoriteIcon = result.favoriteIcon;
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailViewPage');
  }

  ionviewDidLeave() {
    console.log('ionViewDidLeave RecipeDetailViewPage - Close DB');
    this.sqlite.closeDB();
  }

  checkRecipeAuthor() {
    if (this.selectedRecipe.author === this.authorize.getCurrentUser().uid) {
      return true;
    }
    else { return false; }
  }

  toggleFavorites() {
    if(this.favorite) {
      console.log('Changing from Favorite to Unfavorite');
      this.favorite = false;
      this.favoriteIcon = "heart-outline";
      this.unfavoriteRecipe();
    }
    else
    {
      console.log('Changing from UNFavorite to Favorite');
      this.favorite = true;
      this.favoriteIcon = "heart";
      this.favoriteRecipe();
    }
  }

  favoriteRecipe() {
    console.log('TODO Favorite recipe');
    this.sqlite.addToFavoriteTable(this.selectedRecipe.recipeKey);
  }

  unfavoriteRecipe() {
    console.log('TODO UnFavorite recipe');
    this.sqlite.removeFromFavoriteTable(this.selectedRecipe.recipeKey);
  }

  checkFavorite(){
    console.log('Check if Favorite exist');
    return this.sqlite.checkIfExistFavorites(this.selectedRecipe.recipeKey);

  }

  editRecipe() {
    console.log('TODO edit recipe screen');
    console.log(this.selectedRecipe);
    console.log(this.selectedRecipe.recipeKey);
    this.navCtrl.push(EditRecipePage, this.selectedRecipe);
  }

  deleteRecipe() {
    console.log('Delete Recipe');
    this.recipeApi.deleteRecipe(this.selectedRecipe).then(data => this.navCtrl.push(AllRecipesList));
    
  }

}
