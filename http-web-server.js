// Create web server with http which is core module of Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  res.writeHead(200, {'Content-Type': 'text/html'})
  if (url === '/') {
    res.write('<h1>Home Page</h1>');
  } else if (url === '/about') {
    res.write('<h1>About Page</h1>');
  } else if (url === '/contact') {
    res.write('<h1>Contact Page</h1>');
  } else {
    res.write('<h1>Page is not found</h1>');
  }
  res.end();
});

server.listen(3009, () => {
  console.log('Example of with http server is started...')
});