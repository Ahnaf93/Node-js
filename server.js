var http = require('http');
var express=require('express');
var app=express();
var server=http.Server(app)
var fs=require('fs');

 // var server = http.createServer(function(req, res){
   // res.statusCode = 200;
   // res.setHeader('Content-Type', 'text/html');
    //fs.readFile('index.html', function(err,data){

    //  if(err){
     //   return console.log("file read error")
     // }
      
     // res.end(data);

   // })
   
  //});

  app.get('/', function(req, res){

    res.sendFile(__dirname+'/index.html')
  })


  app.get('/about/test:id', function(req, res){

    res.sendFile(__dirname+'/second.html')
  })
  

  app.get('/about/second', function(req, res){

    res.sendFile(__dirname+'/second.html')
  })
  

  
  server.listen(3000, 'localhost', function(){
    console.log('Server running');
  });
