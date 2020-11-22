var express = require('express');
var mongoose = require('mongoose');
var app = express();
var jsonParser = express.json();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
var MONGODB_URI = 'mongodb+srv://artyr:979798228@gebo-claster.urz9o.mongodb.net/geboDB?retryWrites=true&w=majority';
var Schema = mongoose.Schema;
mongoose.connect((MONGODB_URI), { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err)
        return console.log(err);
    app.listen(process.env.PORT, function () {
        console.log("server is up. port: " + process.env.PORT);
        console.log("connect to: " + MONGODB_URI);
    });
});
var userScheme = new Schema({
    name: String,
    userId: String,
    foto: String
}, { versionKey: false });
var User = mongoose.model("User", userScheme);
var adScheme = new Schema({
    idAd: String,
    img: String,
    description: String,
    autor: String,
    autorId: String,
    typeClass: String,
    typeText: String,
    adData: String
}, { versionKey: false });
var Ad = mongoose.model("Ad", adScheme);
var addUserToMongo = function (userData) {
    var user = new User({
        name: userData.name,
        userId: userData.idUser
    });
    user.save(function (err) {
        if (err)
            return console.log(err);
    });
};
var addAdToMongo = function (adData) {
    var ad = new Ad({
        idAd: adData.idAd,
        img: adData.img,
        description: adData.description,
        autor: adData.autor,
        autorId: adData.autorId,
        typeClass: adData.typeClass,
        typeText: adData.typeText,
        adData: adData.adData
    });
    ad.save(function (err) {
        if (err)
            return console.log(err);
    });
};
var findAD = function (filter, res) {
    if (filter === void 0) { filter = {}; }
    Ad.find(filter, function (err, docs) {
        if (err)
            res.send(err);
        res.send(docs);
    });
};
var findUser = function (filter, res) {
    if (filter === void 0) { filter = {}; }
    User.find(filter, function (err, docs) {
        if (err)
            res.send(err);
        res.send(docs);
    });
};
app.get('/', function (req, res) {
    app.use(express.static('front-build'));
    res.sendFile(__dirname + "/front-build/index.html");
});
app.get('/get-ads/:userId', function (req, res) {
    Ad.find({}, function (err, docs) {
        if (err)
            console.log(err);
        var ads = docs.filter(function (item) { return (item.autorId != req.params.userId); });
        res.send(ads);
        console.log('Ads is send.');
    });
});
app.get('/get-my-ads/:userId', function (req, res) {
    Ad.find({ autorId: req.params.userId }, function (err, docs) {
        if (err)
            res.send(err);
        res.send(docs);
    });
});
app.get('/delete-ad/:adId', function (req, res) {
    Ad.findOneAndDelete({ idAd: req.params.adId }, function (err, docs) {
        if (err)
            res.send(err);
        console.log("Ad id- " + req.params.adId + " has delete.");
        res.sendStatus(200);
    });
});
app.put("/add-new-user", jsonParser, function (req, res) {
    addUserToMongo(req.body.userData);
    console.log('User is added.');
    res.sendStatus(200);
});
app.put("/add-new-ad", jsonParser, function (req, res) {
    addAdToMongo(req.body.adData);
    console.log('Ad is added.');
    res.sendStatus(200);
});
