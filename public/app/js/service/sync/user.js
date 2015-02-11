

define(['../services', 'underscore'], function(services, _) {
  services.factory('user', ['$http', function($http){




    var service = {
      data: '',
      getData: getData,
      findUser: findUser,
      init: null
    }
    return service;


    function getData(option, fn){
      if(service.data) {
        fn(service.data);
        return;
      }

      $http.get('getUser')
        .success(function(data) {
          service.data = data;

          fn(data);
        });
    }

    function findUser(buyerId, fn) {

      if(!service.data){
        getData({}, function(){
          findUser(buyerId, fn);
        });
        return;
      }
      var currentUser = _.find(service.data, function(val, key) {
        return buyerId == val.buyerId;
      })

      fn(currentUser);
    }

  }])
})