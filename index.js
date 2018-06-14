var express = require('express');
var bodyParser=require('body-parser');
var fs = require('fs');
var fileUpload = require('express-fileupload');
var dbroutes = require('./routes/dbroutes');
var app=express();
app.use(bodyParser.urlencoded());

// parse the file that is uploaded
app.use(fileUpload());

app.use("/dbroutes", dbroutes);

app.set('views',__dirname+'/public/templates');
app.set('view engine','ejs'); 

app.listen(4500, function(){
    console.log("Server is listening on 4500");
});

app.get('/', function(request, response){
    response.send("Hi!! from express");
});

//app.post("/store",function(request,response){

    /* if(request.files)
    {
        let regex = /\.(docx|doc|pdf)$/;
        let filename= request.files.resume.name;
        if(regex.test(filename))
        {
            request.files.resume.mv("resumes/" + filename, function (err){
                if(err){
                    response.send("Resume not stored and so is data");
                }
                response.send("Resume uploaded successfully!!!");
            });
        }
        else
            response.send("Data not stored please upload doc or pdf");
    }
    else
        response.send("Please upload a file"); */

    //var sno  = request.body.sno;
    //var name = request.body.name;
    //var city = request.body.city;
    
       /*  var obj = {sno:sno,name:name,city:city};
        obj = JSON.stringify(obj);
        fs.appendFile("data/info.txt", obj, function(err){
            if(err)
            response.send("Data not stored!!!");
            response.send("Data stored into a file");
        });  */

    //response.send('testing');
    
//});

app.use(express.static(__dirname + '/public/styles'));
app.use(express.static(__dirname + '/public/scripts'));
app.use(express.static(__dirname + '/bower_components'));
//app.use(express.static(__dirname + '/database'));

app.get('/home', function(request, response){
    response.sendFile(__dirname + "/public/views/index.html");
});


