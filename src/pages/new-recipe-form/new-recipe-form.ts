import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipesApi } from '../../shared/shared';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { AllRecipesList } from '../pages';

import { Recipe }    from '../../app/recipe';

@Component({
  selector: 'page-new-recipe-form',
  templateUrl: './new-recipe-form.html'
})
export class NewRecipeComponent {


constructor(public navCtrl: NavController, private recipesApi: RecipesApi, private _fb: FormBuilder) {}

  categories = ['Foods', 'Desserts', 'Drinks'];

  model = new Recipe('', '', '', '', [], []);

  submitted = false;

  onSubmit() { 
      this.submitted = true; 
      console.log("Submit the new recipe: "+ this.model.title);
      this.recipesApi.postNewRecipe(this.model);
      this.navCtrl.push(AllRecipesList);
}

myForm: FormGroup;
ngOnInit() {
    // we will initialize our form here
    this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    initAddress() {
        // initialize our address
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

addAddress() {
    // add address to the list
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
}

removeAddress(i: number) {
    // remove address from the list
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
}


}