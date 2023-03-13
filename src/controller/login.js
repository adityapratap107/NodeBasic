const Login = require('../models/login');

const loginFunction = (req,res,next) => {
    let userName = req.body.userName;
    let password = req.body.password;

    let login = new Login({
        userName,
        password
    })

    login.save().then((data) => {
        res.send(data);
    })
};

module.exports = {loginFunction};