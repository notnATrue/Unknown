let clearBtn = document.querySelector('#clear-storage');
clearBtn.addEventListener('click',clearStorage);

function clearStorage(){
    storageIndex = 0;
    localStorage.clear();
    console.log(localStorage.length);
    // clearProfile();
};



    var subbtn = document.querySelector("#submit");

    subbtn.addEventListener('click',
    function reddir(){
        location.href='http://localhost:8080/loggin';
    });
// homework.addEventListener('click', function(){
//     var x = homework.getAttribute('class');
//     if(x.className === 'clicked'){

//     }
// })

var homework = document.querySelector('#homework');
    homework.addEventListener('click', function(){
        location.href = 'http://localhost:8080/hw/Homework.html';
        console.log(homework.attributes);
    });

    var loggintest = document.querySelector('#test');
    loggintest.addEventListener('click', function(){
    location.href = 'http://localhost:8080/loggin';
    console.log(loggintest.attributes);
    });
    



// function clearProfile(){
//     let userProfileName = document.querySelector('#user-name');
//     userProfileName.innerHTML = "";
// }
