define(['../controllers','underscore'], function (controllers, _) {
  controllers.controller('trade', [
    '$scope',
    '$http',
    'getTradeRecord',
    'user',
    '$stateParams'
    ,function ($scope, $http, getTradeRecord,user, stateParams) {

      user.init = init;
    function init() {
      getTradeRecord.getNewData(stateParams, getTradeRecord_callback);

      $scope.tradeRecord = '';
      function getTradeRecord_callback(data) {

        $scope.pageSize = data.pageSize;
        $scope.pageNum = data.pageNum;
        $scope.maxPage = data.maxPage;
        $scope.items = data.items;
      }
    }

      init();
  }])
});
