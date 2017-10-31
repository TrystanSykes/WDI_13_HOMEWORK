var request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,aus&units=metric&APPID=d10ed7fa849100a3d43e443f9ba5b599', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  var jsonResp = JSON.parse(body)
  console.log('Location:', jsonResp.name);
  console.log('Temp:', jsonResp.main.temp)
});

