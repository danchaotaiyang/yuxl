'use strict';

let express = require('express');

let app = express();

app.use((req, res, next) => {
  next();
});

app.get('/api/server1', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:12138');
  res.header("Content-Type", "application/json;charset=utf-8");
  //res.send(['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'])
  res.send([{"value":"Alabama","label":"Alabama","name":"Alabama"},{"value":"Alaska","label":"Alaska","name":"Alaska"},{"value":"Arizona","label":"Arizona","name":"Arizona"},{"value":"Arkansas","label":"Arkansas","name":"Arkansas"},{"value":"California","label":"California","name":"California"},{"value":"Colorado","label":"Colorado","name":"Colorado"},{"value":"Connecticut","label":"Connecticut","name":"Connecticut"},{"value":"Delaware","label":"Delaware","name":"Delaware"},{"value":"Florida","label":"Florida","name":"Florida"},{"value":"Georgia","label":"Georgia","name":"Georgia"},{"value":"Hawaii","label":"Hawaii","name":"Hawaii"},{"value":"Idaho","label":"Idaho","name":"Idaho"},{"value":"Illinois","label":"Illinois","name":"Illinois"},{"value":"Indiana","label":"Indiana","name":"Indiana"},{"value":"Iowa","label":"Iowa","name":"Iowa"},{"value":"Kansas","label":"Kansas","name":"Kansas"},{"value":"Kentucky","label":"Kentucky","name":"Kentucky"},{"value":"Louisiana","label":"Louisiana","name":"Louisiana"},{"value":"Maine","label":"Maine","name":"Maine"},{"value":"Maryland","label":"Maryland","name":"Maryland"},{"value":"Massachusetts","label":"Massachusetts","name":"Massachusetts"},{"value":"Michigan","label":"Michigan","name":"Michigan"},{"value":"Minnesota","label":"Minnesota","name":"Minnesota"},{"value":"Mississippi","label":"Mississippi","name":"Mississippi"},{"value":"Missouri","label":"Missouri","name":"Missouri"},{"value":"Montana","label":"Montana","name":"Montana"},{"value":"Nebraska","label":"Nebraska","name":"Nebraska"},{"value":"Nevada","label":"Nevada","name":"Nevada"},{"value":"New hampshire","label":"New hampshire","name":"New hampshire"},{"value":"New jersey","label":"New jersey","name":"New jersey"},{"value":"New mexico","label":"New mexico","name":"New mexico"},{"value":"New york","label":"New york","name":"New york"},{"value":"North carolina","label":"North carolina","name":"North carolina"},{"value":"North dakota","label":"North dakota","name":"North dakota"},{"value":"Ohio","label":"Ohio","name":"Ohio"},{"value":"Oklahoma","label":"Oklahoma","name":"Oklahoma"},{"value":"Oregon","label":"Oregon","name":"Oregon"},{"value":"Pennsylvania","label":"Pennsylvania","name":"Pennsylvania"},{"value":"Rhode island","label":"Rhode island","name":"Rhode island"},{"value":"South carolina","label":"South carolina","name":"South carolina"},{"value":"South dakota","label":"South dakota","name":"South dakota"},{"value":"Tennessee","label":"Tennessee","name":"Tennessee"},{"value":"Texas","label":"Texas","name":"Texas"},{"value":"Utah","label":"Utah","name":"Utah"},{"value":"Vermont","label":"Vermont","name":"Vermont"},{"value":"Virginia","label":"Virginia","name":"Virginia"},{"value":"Washington","label":"Washington","name":"Washington"},{"value":"West virginia","label":"West virginia","name":"West virginia"},{"value":"Wisconsin","label":"Wisconsin","name":"Wisconsin"},{"value":"Wyoming","label":"Wyoming","name":"Wyoming"}])
/*
  res.send([
    {
      _id: 1111,
      value: 'aaaaaa',
      label: 'aaaaaa',
      name: 'aaaaaa'
    },
    {
      _id: 22222,
      value: 'bbbbbb',
      label: 'bbbbbb',
      name: 'bbbbbb'
    },
    {
      _id: 333333,
      value: 'ccccc',
      label: 'ccccc',
      name: 'ccccc'
    }
  ])
*/
});

app.listen(8091);