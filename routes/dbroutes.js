var express = require('express');
var tasks = require('../database/tasks');
var route = express.Router();

route.get("/people",function(request, response){
    tasks.getAll(function(err,data){
        if(err)
            response.render('table',{data:[]});
        else   
            response.render('table',{data:data});
    });
});

route.post("/addpeople",function(request,response){
    let person={
        sno:request.body.sno,
        name:request.body.name,
        city:request.body.city
    }

    tasks.addPerson(person, function(err,data){
        if(err)
            response.send("row not added");
        response.send("row added");
    });
});

module.exports=route;