var express = require('express')
  , routes  = require('./routes')
  , hbs     = require('hbs')
  , tracer  = require('tracer').console();

var app = express();
var oneDay = 86400000;

// Middleware
// ----------

app.use(express.static(__dirname + '/public', { maxAge: oneDay }));
app.use(app.router);

app.set('view engine', 'hbs');

// Routes
// ------

app.get('/', routes.index);

app.listen(process.env.PORT || 3000);
