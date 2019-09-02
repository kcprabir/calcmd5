//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile( __dirname + "/index.html");
});

app.post("/", function(req, res){
  //console.log(req.body.name);
  let text = md5(req.body.name);
  res.send(text);
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
