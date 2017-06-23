var express = require('express');
var loremIpsum = require('lorem-ipsum');
const mustache = require('mustache-express');
var application = express();

application.engine('mustache', mustache());

application.set('views', './views');
application.set('view engine', 'mustache');


application.get('/', function(request, response){
   var lorem = loremIpsum({
        count: 1,
        units: 'paragraphs'
    });
    response.render("index", {model: lorem});
    
});


application.get('/:paragraph_amount', function(request, response){
    var lorem = loremIpsum({
        count: request.params.paragraph_amount,
        units: 'paragraphs'
    });
    response.render("index", {model: lorem});
});

application.listen(3000);