/////////// setting server
const express = require('express');
const { createServer } = require('http');
const app = express();
const jsonParser = express.json();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
// const port = 2000;
// const server = createServer(app);
// const urlGeboDB = 'mongodb://localhost:27017/GEBO_DB'
const MONGODB_URI = 'mongodb+srv://artyr:979798228@gebo-claster.urz9o.mongodb.net/geboDB?retryWrites=true&w=majority'

///////////////// mongoose require
let mongoose = require('mongoose');
const Schema = mongoose.Schema;

//
mongoose.connect((MONGODB_URI), { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if (err) return console.log(err);
  // process.env.PORT
  app.listen(2000, function () {
    console.log(`server is up. port: ${process.env.PORT}`);
    console.log(`connect to: ${MONGODB_URI}`);
  });
});
//


/////////////// new schema users
const userScheme = new Schema({
  name: String,
  userId: String,
  foto: String
}, { versionKey: false });
const User = mongoose.model("User", userScheme);
//////////////// new schema ads
const adScheme = new Schema({
  idAd: String,
  img: String,
  description: String,
  autor: String,
  autorId: String,
  typeClass: String,
  typeText: String,
  adData: String
}, { versionKey: false });
const Ad = mongoose.model("Ad", adScheme);

//////////////////// add user to mongo
let addUserToMongo = (userData) => {

  const user = new User({
    name: userData.name,
    userId: userData.idUser
  });

  user.save(function (err) {

    if (err) return console.log(err);
  })
};

//////////////////// add ad to mongo
let addAdToMongo = (adData) => {

  const ad = new Ad({
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

    if (err) return console.log(err);
  })
};

//////////////// find ad
let findAD = (filter = {}, res) => {

  Ad.find(filter, function (err, docs) {

    if (err) res.send(err);
    res.send(docs)

  })
};

//////////////// find users
let findUser = (filter = {}, res) => {
  User.find(filter, function (err, docs) {

    if (err) res.send(err);
    res.send(docs)
  })
};


//////////////// routing
app.get('/', function (req, res) {
  app.use(express.static('front-build'));
  res.sendFile(__dirname + "/front-build/index.html");
});

// get ads
app.get('/get-ads/:userId', function (req, res) {

  Ad.find({}, function (err, docs) {

    if (err) console.log(err);
    let ads = docs.filter(item => (item.autorId != req.params.userId));
    res.send(ads);
    console.log('Ads is send.');
    console.log(ads);
  })
});

// get my ads
app.get('/get-my-ads/:userId', function (req, res) {

  Ad.find({autorId: req.params.userId}, function (err, docs) {

    if (err) res.send(err);
    res.send(docs);

  })
});

// delete my ad
app.get('/delete-ad/:adId', function (req, res) {

  Ad.findOneAndDelete({idAd: req.params.adId}, function (err, docs) {

    if (err) res.send(err);
    console.log(`Ad id- ${req.params.adId} has delete.`)
    res.sendStatus(200);
  })
});
// add user
app.put("/add-new-user", jsonParser, function (req, res) {
  addUserToMongo(req.body.userData);
  console.log('User is added.')
  res.sendStatus(200);

});

// add ad
app.put("/add-new-ad", jsonParser, function (req, res) {

  addAdToMongo(req.body.adData)
  console.log('Ad is added.')
  res.sendStatus(200);

});