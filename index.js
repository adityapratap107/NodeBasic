const express = require("express");
const mongoose = require('mongoose')
const app = express();
const router = require('./src/routes/emp');
const loginrouter = require('./src/routes/login');
const bodyparser = require('body-parser');
const registerRouter = require("./src/routes/registration/register");
// route
app.get('/',(req,res) => {
    res.send("Hello there!!")
})

app.use(bodyparser.json());
app.use('/emp',router)
app.use('/login',loginrouter);
app.use('/register',registerRouter);

// mongodb connection
mongoose.connect('mongodb+srv://adityarana:HFnBkJgmpXSqheUZ@backendcluster.ksrqzjm.mongodb.net/test', {useNewUrlParser: true})

mongoose.connection.once('open', () => {
    console.log('Database connected successfully');
}).on('error',(err) => {
    console.log('Error', err);
})

app.listen(3000, () => {
    console.log('Server is up!!')
})