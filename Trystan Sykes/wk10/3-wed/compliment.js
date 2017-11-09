var express = require('express');
var _ = require('underscore');
var bodyParser = require('body-parser');
var fs = require('fs');
const app = express();
const PORT = 8888;

// var compliments = [
//   "Your instructors love you",
//   "High five = ^5",
//   "Is it Ruby Tuesday yet?",
//   "It's almost beer o'clock",
//   "The Force is strong with you"
// ]

var compliments = fs.readFile('compArr.json', function(err, data) {
  var string = data.toString()
  var array = string.split("\n")
  return array
debugger
});

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) {
  color = _.sample(colors);
  compliment = _.sample(compliments);
  response.render('index', {color: color, compliment: compliment, name: ''});
});

app.post('/', function (request, response) {
  color = _.sample(colors);
  debugger
  var newCompliment = request.body.compliment
  compliments.push(newCompliment)
  response.render('index', {color: color, compliment: newCompliment, name: ''});

});

app.get('/add', function (request, response) {
  color = _.sample(colors);
  response.render('add', {color: color});
});

app.get('/:name', function (request, response) {
  name = request.params.name;
  color = _.sample(colors);
  compliment = _.sample(compliments);
  response.render('index', {color: color, compliment: compliment, name: name});
});

app.listen(PORT, function () {
  console.log('compliments listening on port 8888!')
});