/**
 * Created by dong on 2015/2/3.
 */
var request = require('request');
var _ = require('lodash');
var Promise = require('bluebird');
var url = require('url');

var host = 'http://192.168.88.246:8080/';



var api  = {
  getRechargeRecord: getRechargeRecord,
  getBankTradeRecord: getBankTradeRecord,
  getTradeRecord: getTradeRecord,
  getWithdrawRecord: getWithdrawRecord,
  getRechargeDetail: getRechargeDetail,
  getWithdrawDetail: getWithdrawDetail,
  getUser: getUser,
  fileUpdate: fileUpdate,
  getBankCard: getBankCard
}


function getBankCard(req, res) {
  var url = host + 'accountservice/getBuyerBankCardList.gm';

  var option = {
    pageNum: req.query.pageNum ||1,
    pageSize:req.query.pageSize ||10,
    buyerId: req.query.buyerId || 104
  }
  console.log(url);
  request.get(url,{qs:option}, function(err,data){
    if(err){
      console.log(err);
      return;
    }

    res.json(JSON.parse(data.body));
  })
}

function fileUpdate(req, res) {
  console.log(req);
}


function getUser(req, res) {

  var url = host + 'accountservice/getBuyerBaseInfoList.gm';
  request.get(url,{}, function(err,data){
    if(err){
      console.log(err);
      return;
    }

    res.json(JSON.parse(data.body));
  })
}


function getRechargeRecord(req, res) {

  var option = {
    pageNum: req.query.pageNum ||1,
    pageSize:req.query.pageSize ||10,
    buyerId: req.query.buyerId || 104
  }

  _.extend(option, req.query);
  var url = host + 'transactionservice/getDepositRecordList.gm';


  console.log(url);
  request.get(url,{qs:option}, function(err,data){
    if(err){
      console.log(err);
      return;
    }

    res.json(JSON.parse(data.body));
  })

  //res.json(RechargeRecord);
}
function getWithdrawRecord(req, res) {

  var option = {
    pageNum: req.query.pageNum ||1,
    pageSize:req.query.pageSize ||10,
    buyerId: req.query.buyerId || 104
  }

  _.extend(option, req.query);
  var url = host + 'transactionservice/getWithdrawRecordList4ERP.gm';


  console.log(url);
  request.get(url,{qs:option}, function(err,data){
    if(err){
      console.log(err);
      return;
    }

    res.json(JSON.parse(data.body));
  })

  //res.json(RechargeRecord);
}

function getBankTradeRecord(req, res) {


  res.json(BankTradeRecord);
}


function getTradeRecord(req, res) {
  var option = {
    pageNum: req.query.pageNum ||1,
    pageSize: req.query.pageSize ||10,
    buyerId: req.query.buyerId || 104
  }

  _.extend(option, req.query);
  var url = host + 'transactionservice/getTransactionRecordList.gm';

  console.log(url);
  request.get(url,{qs:option}, function(err,data){
    if(err){
      console.log(err);
      return;
    }
    res.json(JSON.parse(data.body));
  })
  //res.json(TradeRecord);
}

function getRechargeDetail(rep, res) {
  res.json(RechargeDetail);
}

function getWithdrawDetail(rep, res) {
  res.json(RechargeDetail);
}


RechargeDetail = {
  number: 201501110000400111004500929,
  type: '充值',
  status: '充值成功',
  user: 'buyer',
  rechargeFee: 100.00,
  serviceFee: 10.00,
  preFee: 10.00,
  actualFee: 100.00,
  actualServiceFee: 10.00,
  actualPreFee: 10.00,
  actualRecharge:90.00,
  balanceFee: 90.00,
  way: 'bank',
  createTime: '2015-01-21 14:10:27',
  successTime: '2015-01-21 14:10:27',
  handler: 'jet.xiao@corp.globalmarket.com',
  handlerIp: '195.235.3.12',
  remark : '94备注啦。',
  bankNumber: '2015011100004001110045009294766',
  tradeTime: '2015-01-21 14:10:27',
  tradeFee: 100.00,
  tradeCost: 10.00,
  bankBanlanceFee: 200.00,
  email: 'jet.xiao@gmail.com',
  bankStatus: '成功',
  bankWay: 'T/T',
  virtualAccount: 'abc123',
  bankName: '招商银行',
  accountName: 'steven jobs',
  bankAddress: '中国  深圳',
  bankAccountNumber: '6225 7522 0566 9655',
  swiftCode: '3355',
  note: '3355',
  lastUpdateTime: '2015-01-21 14:10:27'
}


TradeRecord = [
  {
    "number": "20150110092947664",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "cash",
    "createTime": "2015-01-23 14:10:27",
    "successTime": "2015-01-24 14:10:27",
    "status": "0",
    "type": "充值"
  },
  {
    "number": "20150110092947662",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "T/T",
    "createTime": "2015-01-21 14:10:27",
    "successTime": "2015-01-22 14:10:27",
    "status": "0",
    "type": "充值"
  },
  {
    "number": "20150110092947663",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "Paypal",
    "createTime": "2015-01-22 14:10:27",
    "successTime": "2015-01-23 14:10:27",
    "status": "0",
    "type": "充值"
  },
  {
    "number": "20150110092947663",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "Paypal",
    "createTime": "2015-01-22 14:10:27",
    "successTime": "2015-01-23 14:10:27",
    "status": "1",
    "type": "充值"
  },
  {
    "number": "20150110092947662",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "T/T",
    "createTime": "2015-01-21 14:10:27",
    "successTime": "2015-01-22 14:10:27",
    "status": "1",
    "type": "充值"
  },
  {
    "number": "20150110092947664",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "cash",
    "createTime": "2015-01-23 14:10:27",
    "successTime": "2015-01-24 14:10:27",
    "status": "1",
    "type": "充值"
  },
  {
    "number": "20150110092947663",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "Paypal",
    "createTime": "2015-01-22 14:10:27",
    "successTime": "2015-01-23 14:10:27",
    "status": "2",
    "type": "充值"
  },
  {
    "number": "20150110092947662",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "T/T",
    "createTime": "2015-01-21 14:10:27",
    "successTime": "2015-01-22 14:10:27",
    "status": "2",
    "type": "充值"
  },
  {
    "number": "20150110092947664",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "cash",
    "createTime": "2015-01-23 14:10:27",
    "successTime": "2015-01-24 14:10:27",
    "status": "2",
    "type": "充值"
  }
]

module.exports = api;


BankTradeRecord = {
  user:'jet long',
  tradeNumber:2015052256588978522202,
  receviedFee: 120.00,
  serviceFee: 10.00,
  preFee: 10.00,
  actual: 120.00
}


RechargeRecord = [
  {
    "number": "20150110092947664",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "cash",
    "createTime": "2015-01-23 14:10:27",
    "successTime": "2015-01-24 14:10:27",
    "status": "0"
  },
  {
    "number": "20150110092947662",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "T/T",
    "createTime": "2015-01-21 14:10:27",
    "successTime": "2015-01-22 14:10:27",
    "status": "0"
  },
  {
    "number": "20150110092947663",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "Paypal",
    "createTime": "2015-01-22 14:10:27",
    "successTime": "2015-01-23 14:10:27",
    "status": "0"
  },
  {
    "number": "20150110092947663",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "Paypal",
    "createTime": "2015-01-22 14:10:27",
    "successTime": "2015-01-23 14:10:27",
    "status": "1"
  },
  {
    "number": "20150110092947662",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "T/T",
    "createTime": "2015-01-21 14:10:27",
    "successTime": "2015-01-22 14:10:27",
    "status": "1"
  },
  {
    "number": "20150110092947664",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "cash",
    "createTime": "2015-01-23 14:10:27",
    "successTime": "2015-01-24 14:10:27",
    "status": "1"
  },
  {
    "number": "20150110092947663",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "Paypal",
    "createTime": "2015-01-22 14:10:27",
    "successTime": "2015-01-23 14:10:27",
    "status": "2"
  },
  {
    "number": "20150110092947662",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "T/T",
    "createTime": "2015-01-21 14:10:27",
    "successTime": "2015-01-22 14:10:27",
    "status": "2"
  },
  {
    "number": "20150110092947664",
    "user": "buyer1",
    "recharge": "100.00",
    "service": "10.00",
    "coupon": "10.00",
    "way": "cash",
    "createTime": "2015-01-23 14:10:27",
    "successTime": "2015-01-24 14:10:27",
    "status": "2"
  }

]
// status 0 代表充值中，1代表充值成功，2代表充值失败。