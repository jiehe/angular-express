/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('getWithdrawRecord',
    [
      '$http',
      'pagingService',
      '$rootScope',
      'recordHeader',
      '$stateParams',
      function($http, pagingService, $rootScope, recordHeader, $stateParams){

    var service = {
      data: '',
      getData: ''
    }

    service.getData = function() {
      var option = $stateParams;
      option.status = recordHeader.currentStatus;
      option.buyerId = recordHeader.currentBuyerId;
      $http.get('/getWithdrawRecord', {params:option})
        .success(function(data){
          service.data = data;
          //处理分页
          pagingService.changePaging(data);
          $rootScope.$broadcast('withdrawRecordChange');
        })
        .error(function(data) {
          throw new Error(data);
        })
    }



    return service;
  }])
})