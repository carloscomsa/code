const express = require("express");
//router "/"
const router = express.Router();
const Language = require("./models/language");


//find
router.get("/api/programare", async (req,res) =>{
  try {
    const language = await Language.find();
    res.json(language);
  }
    catch (err) {
      throw err;
  }
});

//find by id
router.get("/api/programare/:id", async (req,res) =>{
  try {
    const language = await Language.findById(req.params.id);
    res.json(language);
  }
    catch (err) {
      throw err;
  }
});


//create
router.post("/api/programare", async(req, res) => {
  try {
    const language = new Language(req.body);
    const result = language.joiValidate(req.body);
    if (result.error){
      return res.status(400).json(result.error);
    }
    await language.save();
    res.status(201).json();
  }
  catch(err){
    throw err;
  }
});

//update
router.put("/api/programare/:id", async (req,res) =>{
  try {
    const language = await Language.findByIdAndUpdate(req.params.id, req.body);
    res.json(language);
  }
    catch (err) {
      throw err;
  }
});


//delete
router.delete("/api/programare/:id", async (req,res) =>{
  try {
    const language = await Language.findByIdAndDelete(req.params.id);
    res.status(204).end()
  }
    catch (err) {
      throw err;
  }
});


module.exports = router;
