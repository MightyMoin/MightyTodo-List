var express = require('express')
var toDoController = require('./controllers/toDoController')
var ejs = require('ejs')

var app = express();
app.set('view engine' , 'ejs');

//statics
app.use(express.static('./assets'))



//fire controller
toDoController(app);

//port
app.listen(3000);
console.log('3000 listening');