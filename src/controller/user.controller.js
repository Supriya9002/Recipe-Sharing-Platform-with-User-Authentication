import UserModel from "../model/user.model.js"
import RecipeModel from "../model/recipe.model.js"

export default class UserController{

    getRegister(req, res){
        res.render("register");
    }
    getLogin(req, res){
        res.render("login");
    }

    postRegister(req,res){
        if (!req.body || !req.body.username) {
            return res.status(400).json({ error: 'Invalid request body' });
        }
        const {username, password, email} = req.body;
        req.session.userName = username; // session id stored in cookies,
        UserModel.add(username, password, email);
        res.redirect("/login");
    }

    postLogin(req, res){
        const {email, password} = req.body;
        const isValid = UserModel.isValid(email, password);
        //console.log(isValid);
        if(isValid){
            req.session.userEmail=email; // session id stored in cookies,
            console.log(req.session.userEmail);
            const recipes = RecipeModel.getAll();
            res.render("home", {userEmail:req.session.userEmail, username: req.session.userName, recipes: recipes});
            
        }
    }
    
    logout(req, res){
        //on logout , destroy the session
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect("/login")
            }
        });
        //res.clearCookie("lastVisit");
    }
}