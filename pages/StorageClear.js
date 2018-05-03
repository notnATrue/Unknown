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
        return location.href='http://localhost:8080';
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
    



// function clearProfile(){
//     let userProfileName = document.querySelector('#user-name');
//     userProfileName.innerHTML = "";
// }
