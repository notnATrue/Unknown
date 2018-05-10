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
    };
};
