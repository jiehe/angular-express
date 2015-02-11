var express = require('express');
var router = express.Router();
var api = require('../api/api');
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
var http = require('http');
var util = require('util')

var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {

  var bossUserId   = '1';//req.query.bossUserId;
  var bossUserName = '232';//req.query.bossUserName;
  res.setHeader("Set-Cookie", ["bossUserId="+bossUserId, "bossUserName="+bossUserName]);
  res.render('index.html', {
    layout: false
  });
});



router.get('/login', api.login);


router.get('/getRechargeRecord', api.getRechargeRecord);

router.get('/getBankTradeRecord', api.getBankTradeRecord);

router.get('/getTradeRecord', api.getTradeRecord);

router.get('/getWithdrawRecord', api.getWithdrawRecord);

router.get('/getDetail', api.getDetail);

router.get('/getWithdrawDetail', api.getWithdrawDetail);

router.get('/getUser', api.getUser);

router.get('/getBankCard', api.getBankCard);


router.post('/fileUpdate', api.fileUpdate);

router.get('/ensure', api.ensure);

router.get('/failed', api.failed);

router.get('/updateBankInfo', api.updateBankInfo);


router.get('/importBankInfo', api.importBankInfo);

router.get('/getOperatorIp', api.getOperatorIp);

router.get('/emailRemindPay', api.emailRemindPay);


router.get('/emailRemindPay', api.emailRemindPay);








module.exports = router;
