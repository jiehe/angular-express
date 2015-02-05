var express = require('express');
var router = express.Router();
var api = require('../api/api');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', {
    layout: false
  });
});



router.get('/getRechargeRecord', api.getRechargeRecord);

router.get('/getBankTradeRecord', api.getBankTradeRecord);

router.get('/getTradeRecord', api.getTradeRecord);

router.get('/getRechargeDetail', api.getRechargeDetail);

router.get('/getWithdrawDetail', api.getWithdrawDetail);




module.exports = router;
