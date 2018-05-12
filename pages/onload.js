window.onload = function() { 
    CookieFabric;
    userProperty();
    Encrypt();
    function Encrypt(){
        var but = document.querySelector('#SecondPage');
        but.addEventListener('click', 
        function(){
            location.href = 'http://localhost:3000/tools.html';
        }); 
    };
};


