var mongoose = require('mongoose');
var User = require('../models/users');

module.exports.controller = function (app) {
    app.get('/user/mypage',function (req, res) {
        res.send("this is my page");
    });

    app.get('/user/dashboard',function (req, res) {
        res.send("this is dashboard page");
    });

    app.get('/user/edit',function (req, res) {
        res.send("this is edit page");
    });
    app.get('/user/add',function (req, res) {
        res.render('users/add.ejs');
    });

    app.post('/user/add',function (req, res) {
        var obj ={
            username : req.body.username,
            firstname : req.body.firstname,
            lastname : req.body.lastname
        };
        mongoose.model("User").create(obj,function (err, users) {
            if(err){
                res.send("some error");
            }
            res.send("new user created");
        });
    });

    app.get('/user/view',function (req, res) {
        mongoose.model("User").find(function(err, users) {
            if(err){
                res.send("some error occured");
           }
            res.render('users/view.ejs',{
            users : users});
        });
    });

    app.get('/users/delete/:id',function (req, res) {
        mongoose.model("User").remove({_id:req.params.id},function (err, delData)
         {
            res.redirect("/user/view");
        });

    });


    //Update

    app.get('/user/update',function (req, res) {
        mongoose.model("User").update(function(err, users) {
            if(err){
                res.send("some error occured");
            }
            res.render('users/update.ejs',{
                users : users});
        });
    });
    app.get('/users/update/:id',function (req, res) {




        mongoose.model("User").update({_id:req.params.id},function (err)
        {
            res.redirect("/user/update");
        });

    });


};



//module.exports.controller = function (req, res) {
  //  res
    //    .status(200)
      //  .send("this is  mypage from controller");

//};

