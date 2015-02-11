

define(['../services'], function(services) {
  services.factory('operator', ['$http', 'ipCookie',function($http, ipCookie) {

     var operator = {};

    operator.operateBy = ipCookie('bossUserId');
    operator.operatorName = ipCookie('bossUserName');
    operator.operatorIP = '';


    operator.ensure = function(option, callback) {
      if(!option) {
        throw new Error('确认订单需要操作人');
      }
      option.operateBy = operator.operateBy;
      option.operatorName = operator.operatorName;

      option.operatorIP = operator.operatorIP;

      $http.get('/ensure',{params:option})
        .success(function(data){
          callback(data);
        })
    }

    operator.failed = function(option, callback) {
      if(!option) {
        throw new Error('确认订单需要操作人');
      }

      option.operateBy = operator.operateBy;
      option.operatorName = operator.operatorName;
      option.operatorIP = operator.operatorIP;

      $http.get('/failed',{params:option})
        .success(function(data){
          callback(data);
        })
    }

    operator.getData = function(option,callback) {
      $http.get('/getOperatorIp',{params:option})
        .success(function(data){
          console.log(data);
          operator.operatorIP = data.ip;
        })
    }
    operator.getData({});
    return operator;
  }])
})