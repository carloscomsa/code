const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Schema
const languageSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  college: Boolean,
  programming_languages: String
});






//Validare pe schema
    languageSchema.methods.joiValidate = function(obj) {
      const Joi = require("joi"); //require joi
      let schema = {
        firstname: Joi.string().min(2).max(30).required(),
        lastname: Joi.string().min(2).max(30).required(),
        age: Joi.number().min(14).integer().positive(),
        college: Joi.boolean().required(),
        programming_languages: Joi.string().required()
    };
    return Joi.validate(obj, schema);
}
//asociem Schema cu Model
const Language = (module.exports = mongoose.model("Language", languageSchema));
