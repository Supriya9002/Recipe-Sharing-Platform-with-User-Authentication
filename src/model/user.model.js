export default class UserModel{
    constructor(id, username, email, password){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static getAll(){
        return users;
    }
    static add(username, password, email){
        const newUser= new UserModel (users.length + 1, username, email, password);
        //console.log(newUser);
        users.push(newUser);
    }
    static isValid(email, password){
        const valid = users.find((p)=> p.email == email && p.password == password);
        return valid;
    }
    static getUserByEmail(email){
        return users.find((u)=> u.email === email);
    }
}

var users= [
    new UserModel(
        "1",
        "Amit",
        "amitpal82@gmail.com",
        "Amit123@"
    ),
    new UserModel(
        "2",
        "Pranab",
        "pranabdas55@gmail.com",
        "Pranab564@",
    ),
];