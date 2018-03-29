'use strict';

const path = require('path');
const url = require('url');
const querystring = require('querystring');
let express = require('express');

let app = express();

app.set('view engine', 'html');
app.set('views', path.resolve('view'));
app.engine('html', require('ejs').__express);

app.use(express.static(path.resolve('node_modules')));

app.get('/write', (req, res) => {
  res.setHeader('Set-Cookie', 'name=zfpx');
  res.render('./server1.html', {});
});

app.get('/read', (req, res) => {
  let cookie = querystring.parse(req.headers.cookie, '; ');
  console.log(cookie);
  res.render('./server1.html', {});
});

app.get('/', (req, res) => {
  res.render('./server1.html', {});
});

app.listen(12138);
