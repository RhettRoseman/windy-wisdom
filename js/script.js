// var repoList = document.getElementById('div2');
// var fetchButton = document.getElementById('button');
var APIkey = '54fcf8a6341230278157524bd285f72a' // API Key
var button = document.getElementById('input');
var button1 = document.getElementById('button');
button.addEventListener('input', charlotteWeather);
// button1.addEventListener('click', temperatures)
// button.addEventListener('input', temps)
// var cbutton = document.getElementById('charlotte');
// var abutton = document.getElementById('atlanta');
// var nbutton = document.getElementById('newyork');
// var phbutton = document.getElementById('phoenix');
// var aubutton = document.getElementById('austin');
// var sbutton = document.getElementById('seattle');
// var pobutton = document.getElementById('portland');

var charlotte = 'https://api.openweathermap.org/data/2.5/forecast?q=charlotte&appid=54fcf8a6341230278157524bd285f72a'; // WEATHER/ GEO API 
 
// var atlanta = 'https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=54fcf8a6341230278157524bd285f72a';

// var newyork = 'https://api.openweathermap.org/data/2.5/forecast?q=newyork&appid=54fcf8a6341230278157524bd285f72a';

// var phoenix = 'https://api.openweathermap.org/data/2.5/forecast?q=Phoenix&appid=54fcf8a6341230278157524bd285f72a';

// var austin = 'https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=54fcf8a6341230278157524bd285f72a';

// var seattle = 'https://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=54fcf8a6341230278157524bd285f72a'

// var portland = 'https://api.openweathermap.org/data/2.5/forecast?q=portland&appid=54fcf8a6341230278157524bd285f72a'


function charlotteWeather() {
  fetch(charlotte)
    .then(function (response) {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw response.json();
      };
      // then(data => {
      //   console.log(data)

      // })
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var listItem = document.getElementById('weather')
        listItem.innerHTML="";
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
      let kelvin = 293;
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);
      document.getElementById("weather").textContent = data.list[0].weather[0].description;
      console.log();
      document.getElementById("temperature").textContent = data.list[0].main[0] = fahrenheit
      console.log();
      document.getElementById("cityName").textContent = data.city.name;
      console.log();
    });

   
    // let city = 'Charlotte';
    // document.addEventListener('submit', () => {
    //    city = document.getElementById('cityName').value;
    //    askWeather.open('GET', 'url.../$(city)')
    //    askWeather.send(); 
    

// function getApi() {
//   fetch(atlanta)
//     .then(function (response) {
//       console.log(response);
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw response.json();
//       };
//       // then(data => {
//       //   console.log(data)

//       // })
//     })
//     .then(function (data) {
//       console.log(data);
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.getElementById('cityName')
//         listItem.innerHTML="";
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//       document.getElementById("cityName").textContent = data.list[0].weather[0].description;
//     });



// };
// button.addEventListener('click', getApi);
 };
       