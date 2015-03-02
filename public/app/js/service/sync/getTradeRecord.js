/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('getTradeRecord',
    [
      '$http',
      'pagingService',
      '$rootScope',
      '$stateParams',
      'recordHeader',
      function($http, pagingService, $rootScope, $stateParams, recordHeader){

    var service = {
      data: '',
      getData: ''
    }

    service.getData = function() {
      var option = $stateParams;
      option.status = recordHeader.currentStatus;
      option.buyerId = recordHeader.currentBuyerId;
      $http.get('/getTradeRecord', {params:option})
        .success(function(data){
          service.data = data;
          $rootScope.$broadcast('tradeRecordChange');
          //处理分页
          pagingService.changePaging(data);
        })
        .error(function(data) {
          throw new Error(data);
        })
    }


    return service;
  }])
})