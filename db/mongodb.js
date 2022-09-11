const mongoose = require("mongoose")

//original link to mongodb atlas
// const uri = "<database url>";
const uri = "mongodb://localhost/vijay";
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
module.exports = connectdb;