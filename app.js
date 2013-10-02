var express = require('express')
  , routes  = require('./routes');

var app = express();
var oneDay = 86400000;

// Middleware
// ----------

app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));
app.use(app.router);

app.set('view engine', 'hbs');
app.set('title', 'Node.js Boilerplate');
app.set('script', '/js/app.js');

app.configure('production', function() {
  // Override the script location for production.
  app.set('script', '/js/app.min.js');
});

// Routes
// ------

app.get('/', routes.index);

app.listen(process.env.PORT || 3000);
