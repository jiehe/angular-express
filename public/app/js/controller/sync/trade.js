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
      getTradeRecord.getData(stateParams, getTradeRecord_callback);

      $scope.tradeRecord = '';
      function getTradeRecord_callback(data) {

        angular.extend($scope, data)
      }
    }

      init();
  }])
});
