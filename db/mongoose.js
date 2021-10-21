var mongoose = require('mongoose')

//conect to database
mongoose.connect(process.env.mongoURI,{ useNewUrlParser: true,useUnifiedTopology: true },function(){
console.log("Connnected to the database... ");
});

module.exports = mongoose
