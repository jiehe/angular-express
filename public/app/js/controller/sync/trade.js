define(['../controllers', 'underscore'], function (controllers, _) {
  controllers.controller('trade', [
    '$scope',
    '$http',
    'getTradeRecord',
    'user',
    'recordHeader'
    , function ($scope, $http, getTradeRecord, user, recordHeader) {

      user.init = init;
      recordHeader.currentPage = 'trade';

      function init() {
        getTradeRecord.getData();
      }
      init();

      $scope.$on('tradeRecordChange', function() {
        angular.extend($scope, getTradeRecord.data)
      })


    }])
});
