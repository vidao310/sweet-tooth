import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddNewRecipePage, AllRecipesList } from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  
  goToAddNewRecipe() {
      this.navCtrl.push(AddNewRecipePage);
  }

  goToAllRecipes() {
    this.navCtrl.push(AllRecipesList);
  }

}
