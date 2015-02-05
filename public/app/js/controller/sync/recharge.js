define(['../controllers','underscore', 'jDialog'], function (controllers, _, jD) {
  controllers.controller('recharge', ['$scope', '$http', 'getRechargeRecord', '$stateParams', function ($scope, $http, getRechargeRecord, stateParams) {






    getRechargeRecord.getNewData(stateParams, getRechargeRecord_callback);
    console.log(stateParams);
    $scope.rechargeRecord = '';
    function getRechargeRecord_callback(data) {
      $scope.pageSize = data.pageSize;
      $scope.pageNum = data.pageNum;
      $scope.maxPage = data.maxPage;
      $scope.items = data.items;
    }
  }])
});
