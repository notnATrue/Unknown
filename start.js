//import { request } from 'https';

var express = require('express'),
    app = express();

const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/', function (req, res) {
    var exCookie = JSON.stringify(req.cookies);
    console.log(JSON.parse(exCookie))
    console.log('req-cookies - ' + JSON.stringify(req.cookies))
    if(exCookie === JSON.stringify(req.cookies)){
        console.log('success');
    } else {console.log('fail')}
    //console.log('res-cookies - ' + res.clearCookie('type'))
 // console.log("regular:" + req.headers.cookie.split("/\[\w+\]/g"));
    //res.setHeader('Set-Cookie', ['type=unlogged', 'connection=semi-inkognito']);
    res.sendFile(__dirname + '/pages/index.html');
    // console.log(res.cookie)
});

app.use(express.static(__dirname + '/pages'));


app.post('/loggin', function (req, res) {

    if (req.body.password === '1234') {
        res.setHeader('Set-Cookie', ['type=ninja', 'connection=trusted']);
        
        res.send('cookie under constrution');

    } else {
        res.setHeader('Set-Cookie', ['type=denied', 'connection=any'])
        res.sendStatus(404);
    }
});
// app.get('/loggin', function (req, res) {
   
//    res.send(res.header + res.sendStatus(404));
// });

app.post('/reg', function(req, res) {
   
    console.log("user-thisCookie = " + res.cookie);
    //console.log(req.body.password);

    if(req.body.password === '1234' && req.body.password2 === req.body.password) {
        res.setHeader('Set-Cookie', ['type=ninja', 'connection=trusted']);
        res.send('registration under constraction');
        
    } else {
        res.clearCookie('type')
        res.sendStatus(404)}

});



app.get('/api', function(req, res) {

    res.send('api under constrution')

});

app.listen(3000);












 //  request.name = "trusted";
    // var x = {};
    // x.chch = req.headers.cookie;
    // let cook = JSON.stringify(req.headers.cookie);

    // console.log(x.chch);
    // if(req.headers === "trusted") {
    //     res.cookie = "AcceptedCookie";
    //     res.redirect('index.html');
    // } else {}

    // function check(){
    //     return res.cookie('e-mail');
    // }

    // function CreateUser(emailu, passu){
    //     emailu = this.emailu;
    //     passu = this.passu;
    //     return console.log(emailu + " " + passu);
    // };
    //  let user = {
    //      name:"name",
    //      pas:"pass",
    //  }
     //createUser(user);
    // let loggedUser = new CreateUser();

    // console.log(res.cookie('e-mail', 'pass', { domain: 'http://localhost:8080', path: '/index.html', secure: false }));


/*res.render(view [, locals] [, callback])
Renders a view and sends the rendered HTML string to the client. Optional parameters:

locals, an object whose properties define local variables for the view.
callback, a callback function. If provided, the method returns both the possible error and rendered string, but does not perform an automated response. When an error occurs, the method invokes next(err) internally.*/
// res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
// res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

    // var homework = document.querySelector('#homework');
    // homework.addEventListener('click', function(){
    //     console.log(homework.attributes);
    // });
    // res.redirect('Homework.html');
    // console.log(req.body);



    // req.accepts('text/html');
    // res.location('D:\ShowYourSkill\pages\Homework.html');


        //let users = {
        //     getLength: function(this.length){
        //         return this.legth
        //     }
        // }
        // function CreateUser(m, p){
        //     this.m = m;
        //     this.p = p;
        //     return   function CreateUser(email, pass) {
        //         email = this.email;
        //         pass = this.pass;
        //         return console.log('keys');
        //         };

        //         let user = {
        //             name:undefined,
        //             pas:undefined,
        //         }

        //         let loggedUser = new CreateUser();

        //         CreateUser.call(user);
        // };


        // let loggedUser = new CreateUser();

        // let x = CreateUser.call(user);
        // console.log(x);
