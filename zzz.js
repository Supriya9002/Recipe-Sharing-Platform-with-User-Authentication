 class RecipeModel{
    constructor(recipeId, title, ingredients, author, createdAt){
        this.recipeId=recipeId;
        this.title=title;
        this.ingredients=ingredients;
        this.author=author;
        this.createdAt=createdAt;
    }
}

const recipes =[
    new RecipeModel(
        "1",
        "Quick and Easy Pasta Salad",
        ["2 cups cooked pasta","1 cup cherry tomatoes, halved","1/2 cucumber, diced","1/4 cup red onion, finely chopped","1/3 cup black olives, sliced","1/4 cup feta cheese, crumbled","2 tablespoons olive oil","2 tablespoons balsamic vinegar","Salt and pepper to taste",],
        "Arjun Das",
        "Thu Dec 14 2023 21:39:54 GMT+0530 (India Standard Time)",
    )
]

console.log(recipes[0].ingredients[2]);  //1/2 cucumber, diced
console.log(new Date(Date.now()).toString());
console.log(Date().toString());
//console.log(Date.now().toString());