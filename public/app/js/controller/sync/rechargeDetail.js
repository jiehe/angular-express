/**
 * Created by dong on 2015/2/4.
 */

define(['../controllers'], function (controllers) {
  controllers.controller('rechargeDetail', [
    '$scope',
    'getDetail',
    '$stateParams',
    'getBankTradeRecord',
    function ($scope,
              getDetail,
              $stateParams,
              getBankTradeRecord) {

      $scope.detail = {};
      getDetail.getNewData($stateParams, getRechargeDetail_callback);


      function getRechargeDetail_callback(data) {

        $scope.detail = data;

        getBankTradeRecord.getNewData({transactionId: data.transactionId}, getBankTradeRecord_callback);
      }

      function getBankTradeRecord_callback(data) {

        $scope.detail.bankInfo = data;


      }

    }])
})