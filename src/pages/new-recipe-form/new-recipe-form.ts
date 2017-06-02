import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AllRecipesList } from '../pages';

import { Recipe }    from '../../app/recipe';

@Component({
  selector: 'page-new-recipe-form',
  templateUrl: './new-recipe-form.html'
})
export class NewRecipeComponent {


constructor(public navCtrl: NavController) {}

  categories = ['Foods', 'Desserts', 'Drinks'];

  model = new Recipe('', '', '', '', [], []);

  submitted = false;

  onSubmit() { 
      this.submitted = true; 
      console.log("Submit the new recipe: "+ this.model.title);
      this.navCtrl.push(AllRecipesList);
}


}