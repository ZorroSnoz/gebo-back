var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
var editAdToMongo = function (adData) {
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
        console.log(docs);
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
app.put("/edit-ad", jsonParser, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var filter, update, updatedData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filter = { _id: req.body.adData._id };
                update = {
                    adData: req.body.adData.adData,
                    autor: req.body.adData.autor,
                    autorId: req.body.adData.autorId,
                    description: req.body.adData.description,
                    idAd: req.body.adData.idAd,
                    img: req.body.adData.img,
                    typeClass: req.body.adData.typeClass,
                    typeText: req.body.adData.typeText
                };
                return [4, Ad.findOneAndUpdate(filter, update, { new: true, upsert: true, rawResult: true })];
            case 1:
                updatedData = _a.sent();
                res.send(updatedData);
                return [2];
        }
    });
}); });
