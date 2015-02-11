define(['../controllers','underscore'], function (controllers, _) {
  controllers.controller('recharge', [
    '$scope',
    '$http',
    'getRechargeRecord',
    'user' ,
    '$stateParams',
    function ($scope, $http, getRechargeRecord,user, stateParams) {

      user.init = init;

    function init() {
      getRechargeRecord.getNewData(stateParams, getRechargeRecord_callback);


      function getRechargeRecord_callback(data) {
        $scope.pageSize = data.pageSize;
        $scope.pageNum = data.pageNum;
        $scope.maxPage = data.maxPage;
        $scope.items = data.items;
      }
    }

      init();
  }])
});
