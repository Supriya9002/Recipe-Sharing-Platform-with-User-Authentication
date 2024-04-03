import UserModel from "./user.model.js"


export default class RecipeModel{

    constructor(imgurl, recipeId, title, ingredients, instructions, author, createdAt){ 
        this.imgurl = imgurl;
        this.recipeId=recipeId;
        this.title=title;
        this.ingredients=ingredients;
        this.instructions= instructions;
        this.author=author;
        this.createdAt=createdAt;
    }
    static getAll(){
        return recipes;
    }
    static add(imgurl, title, ingredients, instructions, email){
        const author= UserModel.getUserByEmail(email);
        if (!author) {
            throw new Error("Author not found");
        }
        const newRecipe = new RecipeModel (imgurl, recipes.length + 1, title, ingredients, instructions, author.username, new Date().toString());
        recipes.push(newRecipe);
        console.log(newRecipe);///////////////////////////////////
    }
    static getID(id){
        return recipes.find((u)=> u.recipeId == id);
    }
    static update(recipeObj){
        //console.log(recipeObj); ///////////////////////////////
        const index= recipes.findIndex((p)=> p.recipeId == recipeObj.recipeId);
        recipes[index] = recipeObj;//////////////////////////
        console.log(index);
    }
    static delete(id){
        const index = recipes.findIndex((P)=> P.recipeId == id);
        recipes.splice(index, 1);
    }
}

const recipes =[
    new RecipeModel(
        "images/1702753175637-Pasta-Salad-003.jpg",
        "1",
        "Quick and Easy Pasta Salad",
        "2 cups cooked pasta, 1 cup cherry tomatoes, halved, 1/2 cucumber, diced, 1/4 cup red onion, finely chopped, 1/3 cup black olives, sliced, 1/4 cup feta cheese, crumbled, 2 tablespoons olive oil, 2 tablespoons balsamic vinegar, Salt and pepper to taste.",
        "In a large bowl, combine the cooked and cooled pasta with the cherry tomatoes, cucumber, red onion, black olives, and feta cheese.",
        "Arjun Das",
        "Thu Dec 14 2023 21:39:54 GMT+0530 (India Standard Time)",
    ),
    new RecipeModel(
        "public\images\Microwave Mug Macaroni and Cheese.jpg",
        "2",
        "Microwave Mug Macaroni and Cheese",
        "Ingredients: 1/2 cup elbow macaroni, 1/2 cup water, 1/4 cup milk, 1/2 cup shredded cheddar cheese,1 tablespoon butter, Salt and pepper to taste, Optional: a pinch of paprika or hot sauce for, extra flavor",
        "Microwave Initial Cooking:Microwave the mug on high for 2-3 minutes, or until the water boils and the macaroni starts to cook.Stir and Continue Cooking: Carefully stir the macaroni, making sure it doesn't spill.",
        "Vim Paul",
        "Fri Dec 15 2023 00:40:53 GMT+0530 (India Standard Time)",
    ),
]