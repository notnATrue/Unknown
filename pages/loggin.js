function userProperty(){
    if(localStorage.length!==0) {
      let userDataName = document.getElementById('user-name-head')
      userDataName.innerText = localStorage.getItem('e-mail');
       let userAvatar = document.getElementById('avatar-div');
          let img = document.createElement('img');
          img.setAttribute('src', 'images/GitImage.jpg');
          img.setAttribute('class', 'fixed-margin');
          img.className = 'd-block w-100';
          userAvatar.appendChild(img);
    }
    // reddir();
  }
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
    

    
