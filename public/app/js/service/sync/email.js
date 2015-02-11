/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('email', ['$http',function($http){

    var service = {
      emailRemindPay:'',
      getData: '',
      getNewData: ''
    }

    service.emailRemindPay = function(option, fn) {
      $http.get('/emailRemindPay', {params:option})
        .success(function(data){
          fn(data);
        })
    }

    service.getData = function(option, fn) {
      if(service.data) {
        fn(service.data);
        return true;
      }
      $http.get('/getDetail', {params:option})
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }

    service.getNewData = function(option, fn) {
      $http.get('/getDetail', {params:option})
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }


    return service;
  }])
})