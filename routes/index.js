var express = require('express');
var router = express.Router();
//var ctr_controller1 = require('../controllers/main');
//var ctr_controller2 = require('../controllers/user');

//router
  //  .route('/')
  //  .get(ctr_controller1.controller);
//router
  //  .route('/user')
  //  .get(ctr_controller2.controller);

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
