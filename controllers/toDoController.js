var bodyParser = require('body-parser')
var mongoose = require('../db/mongoose')

//post
var urlencodedParser = bodyParser.urlencoded({ extended: false });



module.exports = function(app){

    
//this is a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo' , todoSchema);

app.get('/todo' , function(req , res) {
    // get data from input and store in mongodb
    Todo.find({} , (err , data) =>{
        if (err) throw err
        res.render('todo' , {todos : data})
    });
});

app.post('/todo', urlencodedParser , function(req , res) {
    //getting data from mongodb and viewing on frontend
    var newTodo = new Todo(req.body).save((err , data) => {    //receiving from frontend ejs and pushing into data
        if (err) throw err
        res.json(data);//sending the data back to frontend ejs
    });
});

app.delete('/todo/:item' , function(req , res) {
    Todo.find({item : req.params.item.replace(/\-/g , " ")}).remove((err , data) =>{
        if (err) throw err;
        res.json(data);
    })
});
};