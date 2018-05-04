function userProperty() {
    if (localStorage.length !== 0) {
        let userDataName = document.getElementById('user-name-head')
        userDataName.innerText = localStorage.getItem('e-mail');
        let userAvatar = document.getElementById('avatar-div');
        let img = document.createElement('img');
        img.setAttribute('src', 'images/GitImage.jpg');
        img.setAttribute('class', 'fixed-margin');
        img.className = 'd-block w-100';
        userAvatar.appendChild(img);
        // let imgloc = new Image();
        // imgloc.src = "images/GitImage.jpg";
        // imgloc.className = 'd-block w-100';
        // imgloc.setAttribute('class', 'fixed-margin');
        // userAvatar.appendChild(imgloc);
    } 
};
function cookie(){
    console.log("localStorage = " + localStorage.getItem('e-mail'));
    console.log("documentCookie = " + document.cookie);
};
    
// var img = new Image();
    // let userAvatar = document.getElementById('avatar-div');
    // userAvatar.appendChild(userAvatar);
    // img.setAttribute('crossOrigin', 'anonymous');
    // img.src = 'images/FrontImage.jpg';
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //Переписать на своем валидаторе

    // var loginbtn = document.querySelector('#login');
    // loginbtn.addEventListener('click' , onSubmit);
    
    // function onSubmit(){
    //     let submit = document.querySelector('#login-submit-reg');
    //     submit.addEventListener('click', loggin);
    // };

    // function loggin(){
    //     var email = document.querySelector('#email');
    //     var name = localStorage.getItem(email.value);
    //     logg(name)
    // };
    

    
