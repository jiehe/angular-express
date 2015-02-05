
define(['../services'], function(services){

  services.factory('getBankTradeRecord', ['$http',function($http){

    var service = {
      data: '',
      getData: '',
      getNewData: ''
    }

    service.getData = function(data, fn) {
      if(service.data) {
        fn(service.data);
        return true;
      }
      $http.get('/getBankTradeRecord')
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }

    service.getNewData = function(data ,fn) {
      $http.get('/getBankTradeRecord')
        .success(function(data){
          service.data = data;
          fn(data);
        })
    }


    return service;
  }])
})