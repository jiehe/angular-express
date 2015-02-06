define(['../controllers','underscore'], function (controllers, _) {
  controllers.controller('trade', ['$scope', '$http', 'getTradeRecord', '$stateParams',function ($scope, $http, getTradeRecord, stateParams) {

    getTradeRecord.getData(stateParams, getTradeRecord_callback);

    $scope.tradeRecord = '';
    function getTradeRecord_callback(data) {

      $scope.pageSize = data.pageSize;
      $scope.pageNum = data.pageNum;
      $scope.maxPage = data.maxPage;
      $scope.items = data.items;
    }
  }])
});
