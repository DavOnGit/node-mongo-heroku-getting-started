const cool = require('cool-ascii-faces');
const bodyParser= require('body-parser');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var db;

app.set('port', (process.env.PORT || 5000));

MongoClient.connect('mongodb://heroku_r1hdctpj:<PASSWORD>@ds029436.mlab.com:29436/heroku_r1hdctpj', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(app.get('port'), () => {
    console.log('listening on ' + app.get('port'))
  });
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
      result += i + ' ';
  response.send(result);
});

app.get('/db', function(request, response) {
    db.collection('quotes').find().toArray( (err,res) => {
       if(err) return console.log(err);
       response.render('pages/db', {quotes: res});
    });
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/db');
  });
});

app.put('/quotes', (req, res) => {
  db.collection('quotes').findOneAndUpdate(
    {
      name: 'Yoda'
    },
    {
      $set: {
        name: req.body.name,
        quote: req.body.quote
      }
    },
    {
      sort: {_id:-1},
      upsert: true
    },
    (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    }
  //res.redirect('/db');
  );
});

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete(
    { name: req.body.name },
    null,
    (err, result) => {
      if (err) return res.send(500, err);
      res.send(result);
    }
  );
});

app.delete('/allquotes', (req, res) => {
  db.collection('quotes').remove( (err, result) => {
      if (err) return res.send(500, err);
      res.send('quotes DB was wiped out!');
  });
});
