define(['../controllers', 'underscore'], function (controllers, _) {
  controllers.controller('recharge', [
    '$scope',
    '$http',
    'getRechargeRecord',
    'user',
    'recordHeader',

    function ($scope, $http, getRechargeRecord, user, recordHeader) {

      user.init = init;
      recordHeader.currentPage = 'recharge';
      function init() {
        getRechargeRecord.getData();
      }
      init();
      $scope.$on('rechargeRecordCharge', function(event, data) {
        angular.extend($scope, data);
      })
    }])
});
