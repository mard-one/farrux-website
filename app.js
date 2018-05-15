var express = require('express');
var path = require('path'); 

var app = express();

app.set('view engine', 'ejs');
app.use('public', express.static(path.join(__dirname + 'public')));

app.get('/', function(req, res) {
  res.render('home');
})

app.set('port', 3000);
app.listen(app.get('port'), function() {
  console.log('server is working on port ', app.get('port'));
})