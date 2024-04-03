
import RecipeModel from "../model/recipe.model.js"

export default class RecipeController{
    getCreateRecipe(req, res){
        res.render("createRecipe", {username: req.session.userName, useremail: req.session.userEmail});
    }
    postCreateRecipe(req, res){
       const {title, ingredients, instructions} =req.body;
       const imgurl = "images/"+ req.file.filename;
       RecipeModel.add(imgurl, title, ingredients, instructions, req.session.userEmail);
       const recipes =  RecipeModel.getAll();
       res.render("home", {recipes: recipes, username: req.session.userName, useremail: req.session.userEmail}); //
    }
    profilePage(req, res){
        const recipes =  RecipeModel.getAll();
        //console.log("profile");
        //console.log(recipes);
        res.render("profile", {recipes: recipes, username: req.session.userName, useremail: req.session.userEmail});
    }
    homePage(req, res){
        const recipes =  RecipeModel.getAll();
        res.render("home", {recipes: recipes, username: req.session.userName, useremail: req.session.userEmail});
    }
    recipeDetails(req, res){
        const id= req.params.id; // You can access the file information from req.file
        const result = RecipeModel.getID(id);
        //console.log(result);
        // console.log(recipe);
        if(result){
            res.render("recipeDetails", {recipe: result});
        }
        else{
            res.status(400).send("Recipe id Not found");
        }
    }
    getUpdate(req, res){
        res.render("update-recipe");
    }
    postUpdate(req, res){
        RecipeModel.update(req.body);
        console.log(req.body); //////////////////////////////
        const recipe = RecipeModel.getAll();
        //res.render("home", {recipes: recipe, username: req.session.userName, useremail: req.session.userEmail});
        res.redirect("/profile");

    }

    // postUpdate(req, res){
    //     const id = req.params.id;
    //     console.log(id);
    //     const {title, ingredients, instructions} =req.body;
    //     const imgurl = "images/"+req.file.filename;
    //     const author= UserModel.getUserByEmail(email);
    //     if (!author) {
    //         throw new Error("Author not found");
    //     }
    //     const newUpdateRecipe = new RecipeModel(imgurl, id, title, ingredients, instructions, author, new Date().toString());
    // }
    deleteRecipe(req,res){
        const id = req.params.id;
        const result = RecipeModel.getID(id);
        if(!result){
            res.status(401).send("Recipe is not found");
        }
        RecipeModel.delete(id);
        const recipes =  RecipeModel.getAll();
        res.render("profile", {recipes: recipes, username: req.session.userName, useremail: req.session.userEmail});
        //res.redirect("/profile")

    }
}