var express = require('express');

//Server
var app = express();
const PORT = process.env.PORT || 3000;

app.use (function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  } else {
    res.redirect ('http://' + req.hostneme + req.url);
  }
});

app.use(express.static('public'));
app.listen(PORT, function(){
    console.log('Express is up and running on port'+ PORT);
});
