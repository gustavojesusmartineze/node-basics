const http = require('http');

function router(request, response) {
  response.writeHead(201, {'Content-Type': 'text/html'});
  switch (request.url) {
    case '/':
      response.write('<h1>Hello, this is http over node</h1>');
      break;
    case '/gustavo':
      response.write('<h1>Hello Gustavo, this is http over node</h1>');
      break;
    default:
      response.write('404 error, I dont know what do you want');
  }
}
http.createServer(function(request, response) {
  console.log('new request');
  console.log(request.url);

  router(request, response);

  response.end();
}).listen(3000);

console.log('Listening por: 3000');