/**
 * Created by dong on 2015/2/3.
 */
var request = require('request');
var _ = require('lodash');
var Promise = require('bluebird');
var url = require('url');
var config = require('./config.json');

var env = process.env.host || 'local';

var prd = process.env.NODE_ENV ;


var HOST = config.host[env];

if(prd) {
  HOST = prd;
}

console.log(HOST);

var api  = {
  getRechargeRecord: getRechargeRecord,
  getBankTradeRecord: getBankTradeRecord,
  getTradeRecord: getTradeRecord,
  getWithdrawRecord: getWithdrawRecord,
  getDetail: getDetail,
  getWithdrawDetail: getWithdrawDetail,
  getUser: getUser,
  fileUpdate: fileUpdate,
  getBankCard: getBankCard,
  ensure: ensure,
  failed: failed,
  updateBankInfo: updateBankInfo,
  importBankInfo: importBankInfo,
  getOperatorIp: getOperatorIp,
  emailRemindPay: emailRemindPay,
  login: login

}

function login(req, res) {

  var bossUserId   = req.query.bossUserId;
  var bossUserName = req.query.bossUserName;
  if(!bossUserId || !bossUserName) {
    throw new Error('请登录boss系统');

  }

  res.setHeader("Set-Cookie", ["bossUserId="+bossUserId, "bossUserName="+bossUserName]);
  res.send({
    'error':false,
    'statusCode':null,
    'resultDesc':null,
    'result':null
  });
}

function emailRemindPay(req, res) {
  var url = HOST + 'emailservice/sendRemindDepositEmail.gm';

  var option = {
    transactionId: req.query.transactionId
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

function getOperatorIp(req,res) {
    var ipAddress;
    var headers = req.headers;
    var forwardedIpsStr = headers['x-real-ip'] || headers['x-forwarded-for'];
    forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
    if (!ipAddress) {
      ipAddress = req.connection.remoteAddress;
    }
  res.json({ip:ipAddress});
}

function importBankInfo(req, res) {
  var url = HOST + 'bankrecordservice/importBankRecord.gm?filePath='+req.query.filePath;

  var option = {
    filePath: req.query.filePath
  }
  console.log(url);
  request.get(url, function(err,data){
    if(err){
      console.log(err);
      return;
    }

    res.json(JSON.parse(data.body));
  })
}

function updateBankInfo(req, res) {
  var url = HOST + 'bankrecordservice/updateBankRecord.gm';

  var option = {
    transactionId: req.query.transactionId,
    bankName:req.query.bankName,
    accountName: req.query.accountName,
    bankTransactionNumber: req.query.bankTransactionNumber,
    bankAddress: req.query.bankAddress,
    swiftCode: req.query.swiftCode
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


function failed(req, res) {
  var url = HOST + 'transactionservice/transactionFailed.gm';

  var option = {
    transactionId: req.query.transactionId,
    transactionType:req.query.transactionType,
    note: req.query.note,
    operateBy: req.query.operateBy,
    operatorName: req.query.operatorName,
    operatorIP: req.query.operatorIP
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
function ensure(req, res) {
  var url = HOST + 'transactionservice/transactionComplete.gm';

  var option = {
    transactionId: req.query.transactionId,
    transactionType:req.query.transactionType,
    note: req.query.note,
    operateBy: req.query.operateBy,
    operatorName: req.query.operatorName,
    operatorIP: req.query.operatorIP
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


function getBankCard(req, res) {
  var url = HOST + 'accountservice/getBuyerBankCardList.gm';

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

  var url = HOST + 'accountservice/getBuyerBaseInfoList.gm';
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
    pageSize:req.query.pageSize ||10
  }
  _.extend(option, req.query);
  var url = HOST + 'transactionservice/getDepositRecordList4ERP.gm';


  console.log(url);
  request.get(url,{data:option}, function(err,data){
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
    pageSize:req.query.pageSize ||10
  }

  _.extend(option, req.query);
  var url = HOST + 'transactionservice/getWithdrawRecordList4ERP.gm';


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

  var option = {
    transactionId:req.query.transactionId
  }

  _.extend(option, req.query);
  var url = HOST + 'bankrecordservice/getBankRecord.gm';

  console.log(url);
  request.get(url,{qs:option}, function(err,data){
    if(err){
      console.log(err);
      return;
    }
    if(data.body){
        res.json(JSON.parse(data.body));
    }else{
      res.send(data.body);
    }
  })

  //res.json(BankTradeRecord);
}


function getTradeRecord(req, res) {
  var option = {
    pageNum: req.query.pageNum ||1,
    pageSize: req.query.pageSize ||10
  }

  _.extend(option, req.query);
  var url = HOST + 'transactionservice/getTransactionRecordList4ERP.gm';

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

function getDetail(req, res) {

  var option = {
    transactionNumber: req.query.transactionNumber
  }

  _.extend(option, req.query);
  var url = HOST + 'transactionservice/getTransactionRecordByNumber.gm';


  console.log(url);
  request.get(url,{qs:option}, function(err,data){
    if(err){
      console.log(err);
      return;
    }

    res.json(JSON.parse(data.body));
  })

  //res.json(RechargeDetail);
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