/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('getWithdrawRecord', ['$http', 'pagingService',function($http, pagingService){

    var service = {
      data: '',
      getData: ''
    }

    service.getData = function(option, fn) {

      $http.get('/getWithdrawRecord', {params:option})
        .success(function(data){
          service.data = data;
          //处理分页
          pagingService.changePaging(data);
          fn(data);
        })
        .error(function(data) {
          throw new Error(data);
        })
    }



    return service;
  }])
})