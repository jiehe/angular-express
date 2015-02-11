/**
 * Created by dong on 2015/2/8.
 */
/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('recordHeader', ['$http',function($http){

    var service = {
      data: '',
      getData: '',
      getNewData: '',
      status : [0, 1, 2],
      currentStatus:null,
      currentBuyerId: null,
      startTime: null,
      endTime: null
    }

    return service;
  }])
})