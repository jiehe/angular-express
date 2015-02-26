define(['../controllers','underscore'], function (controllers, _) {
  controllers.controller('recharge', [
    '$scope',
    '$http',
    'getRechargeRecord',
    'user' ,
    '$stateParams',
    'pagingService',
    function ($scope, $http, getRechargeRecord,user, stateParams, pagingService) {

      user.init = init;

    function init() {
      getRechargeRecord.getData(stateParams, getRechargeRecord_callback);


      function getRechargeRecord_callback(data) {
        angular.extend($scope, data);
      }
    }

      init();
  }])
});
