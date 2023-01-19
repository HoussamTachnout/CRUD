const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  name: String,
  prenom: String,
  age: Number
}//,{timestamps:true}
);
//blogSchema la structure de collections qui crée et model pour representer une collection dans mongodb et user de 2éme argument c'est le nom de collection
const user = mongoose.model("essaie", blogSchema); 
module.exports = user