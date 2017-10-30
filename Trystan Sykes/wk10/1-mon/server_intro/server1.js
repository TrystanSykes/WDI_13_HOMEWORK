var http = require('http');
var fs = require('fs')


var app = function(request, response) {
  if (request.url === '/about') {
    fs.readFile("./about.html", function(err, data){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(data);
  response.end();
  });
  } else if (request.url === '/api') {
    response.writeHead(200, {'Content-Type': 'application/json'} )
    response.write('{"test": "one"}');
    response.end();
  } else if (request.url === '/postcodes') {
    fs.readFile("postcodes.csv", function(err, data) {
      bufferString = data.toString();
      dataArr = bufferString.split('\n');
      var jsonObjArr = [];
      var headers = dataArr[0].split(',');
      for(var i = 1; i < dataArr.length; i++) {
        var data = dataArr[i].split(',');
        var obj = {};
        for(var j = 0; j < data.length; j++) {
          obj[headers[j].trim().replace(/"/g, '')] = data[j].trim().replace(/"/g, '');
        }
        jsonObjArr.push(obj);
      }
      jsonData = JSON.stringify(jsonObjArr);
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(jsonData);
      response.end();
    });
  } else {
    console.log('a request was made');
    response.writeHead(404)
    response.write('hello potato'); 
    response.end();
  }


}

var server = http.createServer( app );

server.listen(8888);

