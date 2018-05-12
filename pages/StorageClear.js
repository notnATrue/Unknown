//import { request } from "http";

//import { request } from "https";
loadImg();
let CookieFabric = function(callback){
    var obj = {};
    var Coookies = document.cookie.split('; ');
        Coookies.forEach(function(item) {
            var x = item.split('=')[0];
            var y = item.split('=')[1];
            obj[x] = y;
        });
        callback(obj);
          };
CookieFabric(function(cookie) { console.log(cookie); });

let clearBtn = document.querySelector('#clear-storage');
    clearBtn.addEventListener('click',function (){
    storageIndex = 0;
    localStorage.clear();
    console.log(localStorage.length);
});

function tools(){
    var but = document.querySelector('#SecondPage');
    but.addEventListener('click', 
    function(){
        location.href = 'http://localhost:3000/tools.html';
    }); 
};
// var btn = document.querySelector('#homework');
//     btn.addEventListener('click', 
//     fetch('hw/task4.js')
//     .then (function(response) {
//         if(response.ok === true){
//             throw Error(responce.statusText)
//            }
//         }));















//var myreq = new request('http://localhost:3000/hw/index.html');

// var homework = document.querySelector('#homework');
//     homework.addEventListener('click', function(){
//         location.href = 'http://localhost:3000/hw/index.html';
//         console.log(homework.attributes);
//     });

    

// var CookieFabric = {
//      getCookie: function(){
//         var obj = {};
//         var Coookies = document.cookie.split('; ');
        
//         console.log(Coookies)
//         Coookies.forEach(function(item) {
//             console.log(item)
//             var x = item.split('=')[0];
//             var y = item.split('=')[1];
//             obj[x] = y;
//         });
//         console.log(obj);
        
//     },
//     a:function(){
//         console.log(this);
//     }
   
// }







    


    // var subbtn = document.querySelector("#submit");

    // subbtn.addEventListener('click',
    // function reddir(){
    //     location.href='http://localhost:8080/loggin';
    // });


    // function runReg(){
    // var loggintest = document.querySelector('#test');
    // loggintest.addEventListener('click', function(){
    // location.href = 'http://localhost:8080/reg';
    // console.log(loggintest.attributes);
    // });
    // }
    
    



// function clearProfile(){
//     let userProfileName = document.querySelector('#user-name');
//     userProfileName.innerHTML = "";
// }
