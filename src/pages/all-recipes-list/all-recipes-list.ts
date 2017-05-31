import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesApi } from '../../shared/shared';
import { RecipeDetailViewPage } from '../pages';

// const allFoodRecipes = new MyFoodLibrary().allRecipes;

@Component({
  selector: 'page-list',
  templateUrl: 'all-recipes-list.html'
})
export class AllRecipesList {
  selectedItem: any;
  items: Array<{title: string, note: string, icon: string, category: string, ingredients: Array<{}>, directions: Array<{}>}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipesApi: RecipesApi) {
    this.selectedItem = navParams.get('item');
    this.items = [];
  }

  itemTapped(event, item) {
    this.navCtrl.push(RecipeDetailViewPage, item);
  }

  ionViewDidLoad() {
  this.recipesApi.getAllRecipes().subscribe(data => {
    data.body.forEach(element => { this.items.push({
      title: element.title,
      note: element.note,
      icon: element.icon,
      category: element.category,
      ingredients: element.ingredients,
      directions: element.directions
    })
  }); 
});

}

}

