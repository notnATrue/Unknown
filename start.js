var express = require('express'),
    app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/pages'));

app.post('/register', function(req, res) {
    if (req.body.password === '1234') {
        res.send('hello');
        
    } else {
        res.send('wrong password');
    }
});

app.get('/loggin', function(req, res) {
    console.log();
    res.redirect('index.html');
    
});

app.get('/api', function(req, res) {
    
    res.send('api under constrution');
});

app.listen(8080);




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
