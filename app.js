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
const port = 2000;
// const server = createServer(app);
const urlGeboDB = 'mongodb://localhost:27017/geboBD';

///////////////// mongoose require
let mongoose = require('mongoose');
const Schema = mongoose.Schema;

//
mongoose.connect(urlGeboDB, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if (err) return console.log(err);
  app.listen(port, function () {
    console.log(`server is up. port: ${port}`);
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
  typeClass: Number,
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

// get ads
app.get('/get-ads', function (req, res) {

  findAD({}, res);
  console.log('Ads is send.');
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