
define(['../services'], function(services){

  services.factory('getBankTradeRecord', ['$http',function($http){

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
      $http.get('/getBankTradeRecord', {params:option})
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }

    service.getNewData = function(option ,fn) {
      $http.get('/getBankTradeRecord', {params:option})
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }
    return service;
  }])
})