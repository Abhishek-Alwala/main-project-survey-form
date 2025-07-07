const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const profileSchema = new Schema({
   image:{type:String}
})

const profileModel = mongoose.model("profile" , profileSchema)
//const proof shoild be added before the law pont 
module.exports = profileModel 
