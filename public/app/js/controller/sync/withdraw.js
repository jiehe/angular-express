define(['../controllers', 'jDialog', 'underscore'], function (controllers, jDialog, _) {
  controllers.controller('withdraw', [
    '$scope',
    'getWithdrawRecord',
    '$stateParams',
    'getBankCard',
    function ($scope, getWithdrawRecord, stateParams, getBankCard) {

    getWithdrawRecord.getNewData(stateParams, getWithdrawRecord_callback);

    function getWithdrawRecord_callback(data) {
      $scope.pageSize = data.pageSize;
      $scope.pageNum = data.pageNum;
      $scope.maxPage = data.maxPage;
      $scope.items = data.items;
    }
      function getBankCardInfo() {
        getBankCard.getData(stateParams, function(data) {
          jDialog.alert('')
        })
      }
  }])
});
