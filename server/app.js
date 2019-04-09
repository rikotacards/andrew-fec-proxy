const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');


const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

const staticPath = `${__dirname}/../public`;
app.use('/books/:id', express.static(staticPath));

// detailsApp.listen(3001);

app.use(
  '/books/:id/details',
  proxy({ target: 'http://localhost:3001', changeOrigin: true }),
);

module.exports = app;
