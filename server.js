//Task- 8b,c
var http = require('http');
var express = require('express')
var app = express ();
//var fs = require('fs');
var server = http.Server(app)
var bodyParser=require('body-parser');
var mongo=require('mongodb')

var db_url= "mongodb://localhost:27017"

mongo.MongoClient.connect(db_url, {useNewUrlParser:true},function(err, client){

        if(err){
          console.log("could not connect to DB")
        }
        else{
          db= client.db('node-cW9')
        }
      

})

var dummyArticle={
  title:"Test article from server",
  Content:"Test content from article"
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


//(8a)
  // var server = http.createServer(function(req, res){
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/html');
  //   fs.readFile('index.html',function(err,data){
  //     if(err){
  //       return console.log("File not found")
  //     }
  //     res.end(data);
  //   })
  // });
  app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
  })

//8c                                                                                                                   
  app.get('/form', function(req, res){
    res.sendFile(__dirname+'/form.html')
  })

  
  //8d: Send article.ejs file on console 
  app.get('/article', function(req, res){
    res.render('article.ejs',{article: dummyArticle})
  })



  // app.get('/about/:id', function(req, res){
    //if(req.params){
      //res.json({key:'value'})
    //}
  //   res.sendFile(__dirname+'/index.html')
  // })
  app.get('/about/second', function(req, res){
    res.sendFile(__dirname+'/second.html')
  })

  //8c & 9a(store inputed data from html page into mongodb server)
  app.post('/article/new', function(req,res){
    console.log(req.body)
    db.createCollection('article', function(err, collection){
      console.log(collection)
    })

    var collection=db.collection('articles')
    collection.save(req.body)

    res.send({message:"data received"})
  })
  server.listen(3000, 'localhost', function(){
    console.log('Server running');
  });