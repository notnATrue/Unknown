var express = require('express'),
    app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/pages'));

app.post('/register', function(req, res) {
    console.log(req.body);
    // res.render('res')
    if (req.body.password === '1234') {
        res.send('hello');
        
    } else {
        res.send('wrong password');
    }
});

app.get('/api', function(req, res) {

    res.send('api under constrution');
});

app.listen(8080);


/*res.render(view [, locals] [, callback])
Renders a view and sends the rendered HTML string to the client. Optional parameters:

locals, an object whose properties define local variables for the view.
callback, a callback function. If provided, the method returns both the possible error and rendered string, but does not perform an automated response. When an error occurs, the method invokes next(err) internally.*/
