/**
 * Created by dong on 2015/2/3.
 */
define(['../services'], function(services){

  services.factory('pagingService', ['$http', '$rootScope', function($http, $rootScope){

    //分页4要素，元素总数，当前页数，总页数，每页显示个数
    var service = {
      total: 10,
      pageNum: 1,
      maxPage: 1,
      pageSize: 10,
      changePaging: chagePanging
    }


    function chagePanging(option) {
      var pagingData = {
        pageSize: option.pageSize,
        pageNum: option.pageNum,
        maxPage: option.maxPage,
        total: option.total
      }
      angular.extend(service, pagingData);

      $rootScope.$broadcast('pagingChange');
    }

    return service;
  }])
})