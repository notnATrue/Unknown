
var inputWord = document.querySelector('#input-word');
var inputNum = document.querySelector('#input-num');

var but = document.querySelector('#b');

var but = document.querySelector('#b');
    but.innerText = 'Encrypt';
    but.addEventListener('click',
    Encrypt
    );

var inputDecrypt = document.querySelector('#input-w');
var inputDecrNum = document.querySelector('#input-n');

var butDecrypt = document.querySelector('#a');
    butDecrypt.innerText = 'Decrypt';
    butDecrypt.addEventListener('click',
    Decrypt
    );

function Encrypt() {
  let word = inputWord.value;
  let ind = inputNum.value;
  let letterArr = [];
  let newLetterArr = [];
    for (var i = 0 ; i < word.length ; i++) {
      letterArr[i] = word.charCodeAt(i);
    };
    for (var i = 0 ; i < letterArr.length ; i++) {
      let x;
      let oldWord = parseInt(letterArr[i]);
      let newWord = parseInt(letterArr[i]+parseInt(ind));
      x += newWord;
      newLetterArr[i] = String.fromCharCode(newWord);
      console.log(x , oldWord , newWord , newLetterArr)
    };
  go(newLetterArr);
};

  function go(e) {
    this.x = "";
    this.e = e;
    for (var i = 0 ; i < e.length ; i++) {
      x += e[i];
      applyE.apply(x);
    };
    function applyE() {
      var h1 = document.querySelector('#enc-res');
      h1.innerText = x;
      };
    };     
      
function Decrypt() {
  let targetValue = inputDecrypt.value;
  let targetIndex = inputDecrNum.value;
  let letterArray = [];
  let newLetterArray = [];
    for (var i = 0 ; i < targetValue.length ; i++) {
      letterArray[i]= targetValue.charCodeAt(i);
      console.log(letterArray)
    };
    for (var i = 0 ; i < letterArray.length ; i++) {
      let y;
      var oWord = parseInt(letterArray[i]);
      var nWord = parseInt(letterArray[i]-targetIndex);
      y += nWord;
      newLetterArray[i] = String.fromCharCode(nWord);
      console.log(y , oWord , nWord,newLetterArray)
    };
  rev(newLetterArray);
};  
function rev(a){
  this.y = "";
  this.a = a;
    for (var i = 0 ; i < a.length ; i++) {
      y += a[i];
      console.log(y) 
    };
  applyD.call(y);
  function applyD() {
    var h2 = document.querySelector('#dec-res');
    h2.innerText = y;
  };
};

