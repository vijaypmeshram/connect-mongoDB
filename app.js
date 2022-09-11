const express = require("express");
const bodyParser = require("body-parser");
const connectdb = require("./db/mongodb");
connectdb();
const path = require("path");
// const mongoose = require("mongoose");
// const mongodb = require("mongodb");
//const { userInfo } = require("os");
const app = express();

const port = 80;
/*
//MongoDb and Mongoose Connection

const uri = "<database url>";
const connectdb = async() => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  .then(() => {
    console.log("MongoDB Connected…")
  })
  .catch(err => console.log(err));
}
const contactSchema = new mongoose.Schema({
  username: String,
  name: String,
  numbar: String,
  email: String,
  address: String,
  textarea: String,
});

const contact = mongoose.model('contact', contactSchema);
*/
app.use("/static",express.static("static"));
app.use(express.urlencoded);
app.use(bodyParser.urlencoded({ extended:true, useNewUrlParser : true}));

//use express templpate engine
app.set("view engine", "pug");

//set view directory to pages loaded
app.set("views", path.join(__dirname, "views"))

app.get("/", (req,res)=>{
    const params = {};
    res.status(200).render("test.pug",params)
});

//add / save contacts in database by post method
app.post("/", (req, res) => {
    let myData = new contact(req.body);
    myData.save().then(() => {
        res.status(200).send("The contact form has submitted succesefully")
    }).catch(() => {
        res.send("The contact form has mot submitted in database")
    });
});

app.listen(port, () => {
    console.log(`server started on port : ${port}`)
});