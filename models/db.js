
var mongoose=require("mongoose");
var db='mongodb://172.21.2.236:27017/190110910414';
mongoose.connect(db);

mongoose.connection.on('connected',function () {
    console.log("connected..");
});
mongoose.connection.on('error',function (err) {
    console.log("connected err"+err);
});
mongoose.connection.on('disconnected',function () {
    console.log("disconnected");
});
process.on('SIGINT',function () {
    mongoose.connection.close(function () {
        console.log("close");
        process.exit(0);
    });
});

exports.mongoose=mongoose;