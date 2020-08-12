import { axios } from "../vendor";
import { APIRecipe } from "../config";

export class Recipe {
   constructor(id) {
      this.id = id;
   }

   async getRecipe() {
      try {
         const res = await axios(`${APIRecipe}${this.id}`);

         this.title = res.data.recipe.title;
         this.author = res.data.recipe.publisher;
         this.img = res.data.recipe.image_url;
         this.url = res.data.recipe.source_url;
         this.ingredients = res.data.recipe.ingredients;
      } catch (error) {
         alert(error);
      }
   }

   calcTime() {
      // Assuming that for every 3 ingredients,
      // we need 15 minutes cooking time
      const numIng = this.ingredients.length;
      const periods = Math.ceil(numIng / 3);

      this.time = periods * 15;
   }

   calcServings() {
      this.servings = 4;
   }
}
