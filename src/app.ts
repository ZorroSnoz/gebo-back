// :TODO NEED ADDED TS FOR ALL FILE

const express = require('express')
const mongoose = require('mongoose')

////////// create express app and added headers in response
const app = express()
const jsonParser = express.json()
app.use((req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

////////// connect URI for mongoDB
const MONGODB_URI: string = 'mongodb+srv://artyr:979798228@gebo-claster.urz9o.mongodb.net/geboDB?retryWrites=true&w=majority'

////////// init mongoose schema
const Schema = mongoose.Schema

////////// connect mongoose with mongoDB
// process.env.PORT - this port for HEROKU
// 2000 - this port for localhost
mongoose.connect((MONGODB_URI), { useNewUrlParser: true, useUnifiedTopology: true }, function (err: any) {
  if (err) return console.log(err)
  app.listen(process.env.PORT, function () {
    console.log(`server is up. por: ${process.env.PORT}`)
    console.log(`connect to: ${MONGODB_URI}`)
  })
})

////////// schemas for mongoose requests

//user schema
const userScheme = new Schema({
  name: String,
  userId: String,
  phone: String,
  foto: String
}, { versionKey: false })
const User = mongoose.model("User", userScheme)

//ad schema
const adScheme = new Schema({
  idAd: String,
  img: String,
  description: String,
  autor: String,
  autorId: String,
  typeClass: String,
  typeText: String,
  adData: String
}, { versionKey: false })
const Ad = mongoose.model("Ad", adScheme)

////////// functions for mongoose
// added users in mongoDB
let addUserToMongo = (userData: any) => {
  
  
  let newUserData: any = {
    name: userData.name,
    userId: userData.idUser,
  }
  if (userData.phone) {
    newUserData.phone = userData.phone
  }
  
    const user = new User(newUserData)

    user.save(function (err: any) {

      if (err) return console.log(err)
    })
  
}

// added ad in mongoDB
let addAdToMongo = (adData: any) => {

  const ad = new Ad({
    idAd: adData.idAd,
    img: adData.img,
    description: adData.description,
    autor: adData.autor,
    autorId: adData.autorId,
    typeClass: adData.typeClass,
    typeText: adData.typeText,
    adData: adData.adData
  })

  ad.save(function (err: any) {

    if (err) return console.log(err)
  })
}

// edit ad
let editAdToMongo = (adData: any) => {

  const ad = new Ad({
    idAd: adData.idAd,
    img: adData.img,
    description: adData.description,
    autor: adData.autor,
    autorId: adData.autorId,
    typeClass: adData.typeClass,
    typeText: adData.typeText,
    adData: adData.adData
  })

  ad.save(function (err: any) {

    if (err) return console.log(err)
  })
}

// find ad :TODO need check, maybe need delete this function
let findAD = (filter = {}, res: any) => {

  Ad.find(filter, function (err: any, docs: any) {

    if (err) res.send(err)
    res.send(docs)

  })
}

// find users :TODO need check, maybe need delete this function
let findUser = (filter = {}, res: any) => {
  User.find(filter, function (err: any, docs: any) {

    if (err) res.send(err)
    res.send(docs)
  })
}


////////// Routing
// get main page for SPA
app.get('/', function (req: any, res: any) {
  app.use(express.static('front-build'))
  res.sendFile(__dirname + "/front-build/index.html")
})

// get ads
app.get('/get-ads/:userId', function (req: any, res: any) {

  Ad.find({}, function (err: any, docs: any) {

    if (err) console.log(err)
    // @ts-ignore
    let ads = docs.filter(item => (item.autorId != req.params.userId))
    res.send(ads)
    console.log('Ads is send.')
  })
})

// get my ads
app.get('/get-my-ads/:userId', function (req: any, res: any) {

  Ad.find({autorId: req.params.userId}, function (err: any, docs: any) {
console.log(docs)

    if (err) res.send(err)
    res.send(docs)

  })
})

// delete my ad
app.get('/delete-ad/:adId', function (req: any, res: any) {

  Ad.findOneAndDelete({idAd: req.params.adId}, function (err: any, docs: any) {

    if (err) res.send(err)
    console.log(`Ad id- ${req.params.adId} has delete.`)
    res.sendStatus(200)

  })
})

// add user
app.post("/add-new-user", jsonParser, function (req: any, res: any) {

  addUserToMongo(req.body.userData)
  console.log('User is added.')
  res.sendStatus(200)

})

// add ad
app.put("/add-new-ad", jsonParser, function (req: any, res: any) {

  addAdToMongo(req.body.adData)
  console.log('Ad is added.')
  res.sendStatus(200)

})

// edit ad
app.put("/edit-ad", jsonParser, async (req: any, res: any) => {

  const filter = { _id: req.body.adData._id }
  const update = {
    adData: req.body.adData.adData,
    autor: req.body.adData.autor,
    autorId: req.body.adData.autorId,
    description: req.body.adData.description,
    idAd: req.body.adData.idAd,
    img: req.body.adData.img,
    typeClass: req.body.adData.typeClass,
    typeText: req.body.adData.typeText
  }

let updatedData = await Ad.findOneAndUpdate(filter, update, {  new: true, upsert: true, rawResult: true})
  res.send(updatedData)

})