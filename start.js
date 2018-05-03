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

app.get('/pages',function(req,res){
       
    res.sendFile('Homework.html');

});

app.listen(8080);