
let clearBtn = document.querySelector('#clear-storage');
clearBtn.addEventListener('click',function (){
    storageIndex = 0;
    localStorage.clear();
    console.log(localStorage.length);
});

;

var homework = document.querySelector('#homework');
    homework.addEventListener('click', function(){
        location.href = 'http://localhost:3000/hw/Homework.html';
        console.log(homework.attributes);
    });











    


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
