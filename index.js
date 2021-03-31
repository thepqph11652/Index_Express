var express = require('express');
var app = express();
var expressHbs = require('express-handlebars');
app.engine('handlebars', expressHbs({layoutsDir: __dirname + '/views/layouts', defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.get('/', function (request, response) {
    var name = 'The Pham';
    var arr = ['Apple', 'Class', 'Public'];
    response.render('home', {title: name, date: '30/3/2021', array: arr});
});
app.post('/login', function (request, response) {

});
app.listen(process.env.PORT || '4000');