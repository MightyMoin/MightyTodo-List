var express = require('express')
var toDoController = require('./controllers/toDoController')
var ejs = require('ejs')

var app = express();
app.set('view engine' , 'ejs');

//statics
app.use(express.static('./assets'))



//fire controller
toDoController(app);

const PORT = process.env.PORT || 3000
//port
app.listen(PORT);
console.log(`${PORT} listening`);