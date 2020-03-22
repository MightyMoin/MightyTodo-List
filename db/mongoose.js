var mongoose = require('mongoose')

//conect to database
mongoose.connect('<mongoURI>',{ useNewUrlParser: true,useUnifiedTopology: true },function(){
console.log("MongoDB Connected");
});

module.exports = mongoose
