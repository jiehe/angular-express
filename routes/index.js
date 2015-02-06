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

router.get('/getWithdrawRecord', api.getWithdrawRecord);

router.get('/getRechargeDetail', api.getRechargeDetail);

router.get('/getWithdrawDetail', api.getWithdrawDetail);

router.get('/getUser', api.getUser);

router.get('/getBankCard', api.getBankCard);


router.post('/fileUpdate', api.fileUpdate);




module.exports = router;
