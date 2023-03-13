 const Register = require('../../models/registration/register');

 const registerFunction = (req,res,next) => {
    let name = req.body.name;
    let email = req.body.email; 
    let password = req.body.password;
    let number = req.body.number;

    let register = new Register({
        name,
        email,
        password,
        number
    })

    register.save().then((data) => {
        res.send(data);
    })
 };

 const getRegisteredUsers = (req,res,next) => {
    Register.find({}).then((data) => {
        res.send(data);
    })
 }

 module.exports = {registerFunction,getRegisteredUsers};