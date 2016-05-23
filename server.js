var express = require('express');

//Server
var app = express();

app.use(express.static('public'));
app.listen(3000, function(){
    console.log('Express is up and running');
});
