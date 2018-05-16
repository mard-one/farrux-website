var express = require('express');
var path = require('path'); 

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));


app.get('/home', function(req, res) {
  res.redirect('/');
})
app.get('/about', function(req, res) {
  res.render('about');
})
app.get('/activities', function(req, res) {
  res.render('activities');
})
app.get('/', function(req, res) {
  res.render('home');
});

app.set('port', 3000);
app.listen(app.get('port'), function() {
  console.log('server is working on port ', app.get('port'));
})