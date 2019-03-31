const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.connect('mongodb://localhost/index', {useNewUrlParser: true});
let db = mongoose.connection;

const app = express();

app.use(bodyParser.json());
//init routes
app.use(routes);

//server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
