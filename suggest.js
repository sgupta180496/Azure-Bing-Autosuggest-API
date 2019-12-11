var router = require('express').Router();
var axios = require('axios');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jwt =require('jsonwebtoken');

router.post('/login', function(req, res){
// mock user
  var user ={
    id:1,
    username: 'Saloni',
    email:'sgupta38@uncc.edu'
  }

  jwt.sign({user},'secretkey', function(err, token){
    res.json({token});
  });

});

/*
Below section comprises of the JWT mechanism implemented. 
Since, we do not have a database attached, a mock user has been created.
When a user tried to call the /suggestions endpoint, the request is denied.
The user then calls the /login endpoint which provides a token.
The user inserts the token in the header which grants him access to the API.
*/

router.post('/suggestions', urlencodedParser, function(req, res){
// router.post('/suggestions', urlencodedParser, verifyToken, function(req, res){
//   jwt.verify(req.token, 'secretkey', function(err, authData){
//    if(err) {
//      res.sendStatus(403);
//    } else {
//      // setting the configuration for API
//      var config = {
//           headers:{
//                       "Content-Type":"application/json",
//                       "Ocp-Apim-Subscription-Key": 1fea3e22ef164b488d0979c0e112f4c0
//                   },
//           params: {
//                       "q" : req.body.query,
//                       "mkt" : req.body.mkt || "en-us"
//                   }
//         }
  
//         axios.get("https://api.cognitive.microsoft.com/bing/v7.0/Suggestions", config)
//         .then(function(response){
//           res.send(response.data);
//         })
//         .catch(function(err){
//           console.log("Error:",err);
//         });
//    }
//    });
  
  // setting the configuration for API
  var config = {
       headers:{
                   "Content-Type":"application/json",
                   "Ocp-Apim-Subscription-Key": "1fea3e22ef164b488d0979c0e112f4c0"
               },
       params: {
                   "q" : req.body.query,
                   "mkt" : req.body.mkt || "en-us"
               }
     }

     axios.get("https://api.cognitive.microsoft.com/bing/v7.0/Suggestions", config)
     .then(function(response){
       res.send(response.data);
     })
     .catch(function(err){
       console.log("Error:",err);
     });
});

//verifies that the authorization in header comprises of the token or not.

function verifyToken(req, res, next){
  // Get auth header value
 var bearerHeader = req.headers['authorization'];
 // Check if bearer is undefined
 if(typeof bearerHeader !== 'undefined') {

   var bearer = bearerHeader.split(' ');
   var bearerToken = bearer[1];
   req.token = bearerToken;
   next();
 } else {
   // Forbidden
   res.sendStatus(403);
 }
}

module.exports= router;
