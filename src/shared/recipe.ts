export class Recipe {
  constructor(
    public title: string,
    public note: string,
    public icon: string,
    public category: string,
    public ingredients: Array<string>,
    public directions: Array<string>,
    public author: string,
    public recipeKey?: string
  ) {  }
}