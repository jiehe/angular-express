/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('getRechargeRecord', ['$http',function($http){

    var service = {
      data: '',
      getData: '',
      getNewData: ''
    }

    service.getData = function(option, fn) {
      if(service.data) {
        fn(service.data);
        return true;
      }
      $http.get('/getRechargeRecord', {params:option})
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }

    service.getNewData = function(option, fn) {
      $http.get('/getRechargeRecord', {params:option})
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }


    return service;
  }])
})