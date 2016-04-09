var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Costs = mongoose.model('Costs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET the healthcare_costs */
router.get('/costs', function(req, res, next) {
  Costs.find({}, {_id: 0}, function(err, costs){
    if(err){ return next(err); }

    res.json(costs);
  });
});

module.exports = router
