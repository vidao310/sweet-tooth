import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { RecipesApi } from '../../shared/shared';
import { RecipeDetailViewPage } from '../pages';
import * as _ from 'lodash';

@Component({
  selector: 'page-list',
  templateUrl: 'all-recipes-list.html'
})
export class AllRecipesList {
  selectedItem: any;
  items: any;
  recipesCategories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController, private recipesApi: RecipesApi) {
    this.selectedItem = navParams.get('item');
    this.items = [];
    this.recipesCategories = [];
  }

  itemTapped(event, item) {
    this.navCtrl.push(RecipeDetailViewPage, item);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Baking..."
    });

    loader.present().then(() => {
        this.recipesApi.getAllRecipes().subscribe(data => {
          for (var i = 0; i < data.length; i++){
              this.items.push({
              title: data[i].title,
              note: data[i].note,
              icon: data[i].icon,
              category: data[i].category,
              ingredients: data[i].ingredients,
              directions: data[i].directions,
              author: data[i].author,
              recipeKey: data[i].recipeKey
              
            })

            console.log('Getting API data author '+ data[i].author);
          };

        this.recipesCategories = _.chain(this.items).groupBy('category').toPairs().map(item => _.zipObject(['categoryName', 'categoryRecipes'], item )).value();
        loader.dismiss(); 
      });
    })
}

}

