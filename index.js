import express from "express"
import path from "path"
import ejsLayout from "express-ejs-layouts"
import UserController from "./src/controller/user.controller.js"
import RecipeController from "./src/controller/recipe.controller.js"
import session from "express-session"
import cookieParser from "cookie-parser"
import uplodeFile from "./src/middlewares/file-uplode.middleware.js"
import auth from "./src/middlewares/auth.js"
import setLastVisit from "./src/middlewares/lastvisite.middleware.js"

const server = express();

//ejs setting
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "view"));
server.use(ejsLayout);
server.use(express.static("src/view"));
server.use(express.static("public"));

// use session
server.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
//for cookie
server.use(cookieParser());

//middleware for setlastvisite
server.use(setLastVisit);

//instance
const userController = new UserController();
const recipeController = new RecipeController();

// req.body
server.use(express.urlencoded({ extended: true }));

//user server
server.get("/register", userController.getRegister);
server.post("/register", userController.postRegister);
server.get("/login", userController.getLogin);
server.post("/login", userController.postLogin);
server.get("/logout", userController.logout);

//recipe server
server.get("/create-recipe", recipeController.getCreateRecipe);
server.post("/create-recipe", auth, uplodeFile.single("imgurl") ,recipeController.postCreateRecipe);
server.get("/profile", recipeController.profilePage);
server.get("/", auth , recipeController.homePage);
server.get("/recipe/:id", recipeController.recipeDetails);
server.get("/update-recipe/:id", recipeController.getUpdate);
server.post("/update-recipe", recipeController.postUpdate);
server.get("/recipe-delete/:id", recipeController.deleteRecipe);

server.listen(2000,()=>{
    console.log("server running port 2000");
})

//From form data from our form request. Where is that file? So this is where while applying the middle attribute, right? 
//We have mentioned that you can read file, you can store file. But where is that file from form data? From our form request. 
//Where is that file? So this is where while applying the middleware will have to configure using Dot single function. What this 
//single function, does it returns a middleware to process a single file associated with the given form field. So what isducte the 
//form field? What is the name of the field? Name of there