var express = require('express');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var suggestRouter = require('./routes/suggest');


//Helmet can help protect your app from some well-known
//web vulnerabilities by setting HTTP headers appropriately.
var helmet = require('helmet');

var https = require ('https');
var port = process.env.PORT || 8080;

//setup express app
var app = express();


dotenv.config();


app.use(bodyParser.json());


app.use('/', suggestRouter);
app.use(helmet());


app.listen(port, function(){
  console.log('Listening on port: ', port);
});
