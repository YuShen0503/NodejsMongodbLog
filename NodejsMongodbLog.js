const express = require("express")
const app = express()
const mongose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');
const schema={
    name:String,
    age:Number,
    hobby:String,
    health:String
}
const Cat = mongoose.model('cats1', schema);
const kitty = new Cat({ name: 'Zildjian2' });
kitty.save().
app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
})
app.listen(10414)
//something go wrong