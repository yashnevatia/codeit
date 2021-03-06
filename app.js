var express = require('express');
var app = express();
var _ = require('underscore');
var {calculateEmptyArea} = require('./calculateEmptyArea');
var {quickSort} = require('./sort');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sort', function(req, res){
  var array = req.body;
  console.log(array);
  var temp = quickSort(array, 0, array.length -1);
  res.send(temp);
});

app.post('/calculateemptyarea', function(req, res){
  var input = req.body;
  console.log(input);
  var result = calculateEmptyArea(input);
  var object = {"result" : result};
  console.log(object);
  res.send(JSON.stringify(result));
})

app.listen(process.env.PORT || 3000, function(){
  console.log("server successfully listening");
})
