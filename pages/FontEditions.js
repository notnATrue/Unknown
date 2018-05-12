// import { url } from "inspector";

function loadImg() {
    // let sevEdit = document.querySelector('')
    var container = document.querySelector('.container');
    var img = document.createElement('img');
    img.setAttribute('id', 'img');
    img.className = "float-center";
    //img.setAttribute('src', 'http://localhost:3000/mainSwitch.jpg');
    document.body.style.backgroundImage = ('url(http://localhost:3000/mainSwitch.jpg)');
    console.log(container);
    // document.body.style.backgroundImage = img;
    // RenderImage('http://localhost:3000/main.jpg');
    // let RenderImage = (src) => {
    //     let ImageElement = document.createElement("img");
    //         ImageElement.src = src;
      
    //     let TargetBlock = document.getElementById("target");
    //         TargetBlock.appendChild(ImageElement);
    //   };
    function Encrypt(){
        var but = document.querySelector('#SecondPage');
        but.addEventListener('click', 
        function(){
            location.href('http://localhost:3000/tools.html')
        });
            
        
    }
};