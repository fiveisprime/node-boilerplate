var express = require('express')
  , routes  = require('./routes')
  , tracer  = require('tracer').console();

var app = express();
var oneDay = 86400000;

// Middleware
// ----------

app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));
app.use(app.router);

app.set('view engine', 'hbs');

// Routes
// ------

app.get('/', routes.index);

app.get('/info', function(req, res) {
  res.json({
    version: process.version
  , env: process.env
  });
});

app.listen(process.env.PORT || 3000);
