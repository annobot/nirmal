var express= require('express');
var server=express();




server.set('view engine','ejs');
server.use('/',express.static(__dirname + '/assets'));
server.get('/',function(req,res){
      res.render('her');

  });




server.listen(process.env.PORT || 3000);
console.log('made it');
