const express = require("express")
const app = express()
const mongoose = require('mongoose');
const ejs = require('ejs')
mongoose.connect('mongodb://172.21.2.236:27017/190110910414');
const schema={
    name:String,
    age:Number,
    hobby:String,
    health:String
}
const mydata = mongoose.model('cats1', schema);
// const kitty = new Cat({ name: 'Zildjian2' });
// kitty.save()
app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    //res.send(req.query)
    console.log(req.query)
    const kitty = new mydata({ name: req.query.first,health:req.query.second });
    kitty.save()
    // ejs.renderFile(filename, data, options, function(err, str){
    //     // str => 输出渲染后的 HTML 字符串
    // });
    ejs.renderFile("result.html",{returnVAl:"success"}<{req,res})
        res.send(str)
})
app.listen(10414)