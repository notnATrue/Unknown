window.addEventListener("load", function () {
  var countries = ['Ukraine', 'Poland', 'USA'];
  var ukraineCity = ['Kyiv', 'Lviv', 'Odesa', 'Charkiv'];
  var polandCity = ['Warszawa', 'Poznan', 'Krakow', 'Katowice'];
  var usaCity = ['New York', 'Los Angeles', 'Las Vegas', 'Chicago'];
  var select = document.querySelector('#countries');
  //var option = document.createElement('option');
  appearList();
  select.selectedIndex = -1;

  function appearList() {
    var cityArr = [ukraineCity,polandCity,usaCity];
    cityString = cityArr.toString();

    for (var i = 0 ; i < countries.length ; i++) {
      var classGood = cityArr[i].toString();
      var cityNew = (classGood.replace(/ /g, '-').replace( /,/g , ' ' ))
      console.log(cityNew)
      var option = document.createElement('option');
      option.className = cityNew;  
      option.setAttribute('id', countries[i]);
      option.innerText = countries[i];
      select.appendChild(option);
    };
    select.addEventListener('change', function(){
      var toRemove = document.getElementById('city');
      
      var res = document.querySelector('#result');
      res.removeChild(toRemove);
    });
    select.addEventListener('change', function(){
      
      city(select.value);
    });
  };     
});
  
  function city(e){
    var select = document.querySelector('#countries');
    var res = document.querySelector('#result');
    
    var country = e;
    
    var resSelect = document.createElement('select');
    resSelect.setAttribute('id', 'city');
    resSelect.className = "float-top";
    var option = document.querySelectorAll('option');
    let target = document.getElementById(e);
    let citys = target.classList;
    
    console.log(target);
    
    console.log(citys)
    // var resString = document.createElement('div');
    // res.appendChild(resString)
    for(var i = 0 ; i < citys.length ; i++){
      var resOption = document.createElement('option');
      resOption.innerText = citys[i];
      resSelect.appendChild(resOption);
      res.appendChild(resSelect);
      resSelect.selectedIndex = -1;
    };
    
    resSelect.addEventListener('change' , function(){
      weather(resSelect.value , country);
    });
    
    
  }
  function weather(e , c){
    var weatherControl;
    
    var res = document.querySelector('#result');
   
    console.log(e);
    var li = document.createElement('li');
    li.classList = "sticky-top";
    var currentT = randomT(-10 , 40);
    var currentW = randomW(0 , Array.value);
      
    if(currentT < 0){
        var w = randomW(0 , coldW.length-1)
        li.innerText = c + " " + e + currentT + " " + coldW[w];
      }
    if(currentT >= 0 && currentT < 30) {
        var w = randomW(0 , hotW.length-1)
        li.innerText = c + " " + e + " +" + currentT + " " + hotW[w];
      }
    if(currentT >= 30) {
        var w = randomW(0 , overHotW.length-1)
        li.innerText = c + " " + e + " +" + currentT + " " + overHotW[w];
      }
    console.log(w)
    res.appendChild(li);
  }
    
  var coldW = ['Солнечно', 'Легкий снегопад', 'Сильный снегопад'];
  var hotW = ['Солнечно', 'Дождь', 'Ветер', 'Сильный дождь'];
  var overHotW = ['Солнечно', 'Засуха', 'Ветер']

  function randomT(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
    
  function randomW(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  /*
    Задание:

    1. Сгенерировать список стран в Select countries
    2. При выборе страны генерировать еще один Select со списком
      городов этой страны и вывести этот селект в блок result
    3. При выборе города нужно случайно рандомить температуру от
    -10 градусов до +40. Если температура

      -10 до 0 то 'Солнечно' 'Легкий снегопад' 'Сильный снегопад'
      0 до 30 то  'Солнечно' 'Дождь' 'Ветер' 'Сильный дождь'
      30 до 40 то 'Солнечно' 'Засуха' 'Ветер'

    4. Вывести сообщение на страничку
      {Country}. В {City} {Weather} {Temperature} градусов.
      Ukraine. В Kyiv Солнечно -10 градусов

      + бонус добавить красивые картинки с погодой
  */
