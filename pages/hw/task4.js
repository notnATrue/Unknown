
var header = document.querySelector('.main');
var div = document.querySelector('.input-group-sm');
header.appendChild(div);
var divIn = document.createElement('div');
divIn.className = "col";
div.appendChild(divIn);

var input = document.createElement('input');
input.setAttribute('id','word');
input.className = "form-control mb-2";
input.id = 'inlineFormInput';

divIn.appendChild(input);

var inputNum = document.createElement('input');
input.setAttribute('id', 'number');
divIn.appendChild(inputNum);

var inputDecrypt = document.createElement('input');
div.appendChild(inputDecrypt);
var inputDecrNum = document.createElement('input');
div.appendChild(inputDecrNum);
var butDecrypt = document.createElement('button');
butDecrypt.setAttribute('type','button');
butDecrypt.innerText = 'Decrypt';
div.appendChild(butDecrypt);

butDecrypt.addEventListener('click',
  Decrypt
  );
var divResult = document.createElement('div');
  divResult.setAttribute('class' , 'result');
  document.body.appendChild(divResult);
  //var id = 0;

  var but = document.createElement('button');
  but.className = "btn btn-primary";
  but.setAttribute('type','button');
  but.innerText = 'Encrypt';
  
  divIn.appendChild(but);
    but.addEventListener('click' ,
    thisContext
    );
function newObject(a){
  var ul = document.createElement('ul');
  header.appendChild(ul);
  var liResult = document.createElement('li');
  //liResult.setAttribute('id' , id);
  liResult.className = 'list-group-item';
  //id++;
  var x="";
  for(var i = 0 ; i < a.length ; i++){
    
   x += a[i];
   console.log(x)
  }
  liResult.innerText = x;
  ul.appendChild(liResult);
};




 function Add(a, b , c , d) {
   //console.log(this.d.length);
    // for(var i = 1040 ; i < 1039+this.d.length ; i ++){
    //   console.log(String.fromCharCode(i));
    // }
  console.log('add pos', this.a + this.b);
  encryptCesar(this.c , this.a);
    
 // ten.get();
 }

 function Decrypt(){
  let targetValue = inputDecrypt.value;
  let targetIndex = inputDecrNum.value;
  var letterArray = [];
  var newLetterArray = [];
  for (var i = 0 ; i < targetValue.length ; i++){
   letterArray[i]= targetValue.charCodeAt(i);
   console.log(letterArray[i]);
  };
  for(var i = 0 ; i < letterArray.length ; i++){
    var x;
    var oldWord = parseInt(letterArray[i]);
    var newWord = parseInt(letterArray[i]-targetIndex);
    x += newWord;
    console.log(newWord)
   //   console.log("oldWord :" + oldWord);
   
   //  console.log((String.fromCharCode(newWord)));
   newLetterArray[i] = String.fromCharCode(newWord);
   // console.log(newLetterArray);
   //AddWord(newLetterArray);
  
  
  }
  newObject(newLetterArray);
  console.log(letterArray);
  console.log(newLetterArray);
   // console.log("newWord :" + newWord);
 }
 function encryptCesar(c , a){
   var letterArray = [];
   var newLetterArray = [];
   for (var i = 0 ; i < c.length ; i++){
    letterArray[i]= c.charCodeAt(i);
    //console.log(x);
   }
   for(var i = 0 ; i < letterArray.length ; i++){
     var oldWord = parseInt(letterArray[i]);
     var newWord = parseInt(letterArray[i]+a);
    //   console.log("oldWord :" + oldWord);
    
    //  console.log((String.fromCharCode(newWord)));
    newLetterArray[i] = String.fromCharCode(newWord);
    // console.log(newLetterArray);
    //AddWord(newLetterArray);
   
   }
   newObject(newLetterArray);
   console.log(letterArray);
   console.log(newLetterArray);
    // console.log("newWord :" + newWord);
    
};
 


 var ten = {
   
   a:0,
   b:4,
   c:"",
  // d:'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
  set: function(word,num){
    this.c = word;
    //console.log('before ' + this.c);
    this.a = parseInt(num);
    //console.log('after ' + this.c);
  },
  get: function(){
    this.a = 0;
    this.c = "";
    return this.a , this.c;
  },
}; // 3


 function thisContext(){
  this.word = input.value;
  this.num = inputNum.value;
  if(isNaN(parseInt(this.num))){
    console.error('NaN');
  } else {
    ten.set(this.word ,this.num);
    Add.call(ten);
  }
}
  
  


//  Object.defineProperty(golobalObject , "value" , {
//   get: function(){
//     return this.name;
//   },
//   set: function(value){
//     this.name = value;
//     console.log(this.name);
//   }
// });
 




















/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.

    Например:
      encryptCesar('Word', 3);
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1('Sdwq', 3);
      decryptCesar1(...)
      ...
      decryptCesar5(...)

*/
