/**
 * Created by dong on 2015/2/3.
 */
define(['../services', 'underscore'], function (services, _) {

  services.factory('getRechargeRecord',
    [
      '$http',
      '$stateParams',
      '$rootScope',
      'pagingService',
      'recordHeader',
      function ($http,$stateParams, $rootScope, pagingService, recordHeader) {
        var service = {
          data: '',
          getData: getData,
          changeStatus: changeStatus
        }
        function getData(fn) {
          var option = $stateParams;
          option.status = recordHeader.currentStatus;
          option.buyerId = recordHeader.currentBuyerId;
          $http.get('/getRechargeRecord', {params: option})
            .success(function (data) {
              service.data = data;
              $rootScope.$broadcast('rechargeRecordCharge', data);
              //处理分页
              pagingService.changePaging(data);
            })
            .error(function (data) {
              throw new Error(data)
            })
        }

        function changeStatus(transactionId, status) {
          if(!service.data) {
            return;
          }
          _.each(service.data.items, function(item) {
            if(item.transactionId == transactionId) {
              item.status = status;
            }
          })
        }

        return service;
      }])
})