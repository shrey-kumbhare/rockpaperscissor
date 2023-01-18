//jshint esversion:6
const express = require("express");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");
const _ = require("lodash");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var ys=0;
var sc=0;
app.get("/",function(req,res){
  res.render("home",{
    yourscore:ys,
    systermscore:sc
  });
});

app.post("/",function(req,res){
  const f=_.upperCase(req.body.result);
  if(f=="WON"){
    ys+=1;
  }else if(f=="LOST"){
    sc+=1;
  }
 res.redirect("/");
  
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

