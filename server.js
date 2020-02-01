// Require in necessary dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
// PORT set up
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({
    defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

// Routes
var routes = require('./controllers/burgers_controllers');
app.use(routes);

// PORT listener
app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT)
});