// Create web server With express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', (req,res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send('<h1>About Page</h1>');
});

app.get('/contact', (req,res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send('<h1>Contact Page</h1>');
});

app.get('*', (reg, res) => {
  res.set('Content-Type', 'text/html');
  res.status(404).send('<h1>Page is not found</h1>');
});

app.listen(3008, () => {
  console.log('Example of with express server is started...')
});
