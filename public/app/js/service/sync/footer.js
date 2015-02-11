/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('footer', ['$http',function($http){

    var service = {
      maxPage: '',
      pageNum: '',
      pageSize: ''
    }


    return service;
  }])
})