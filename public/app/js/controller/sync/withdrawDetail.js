/**
 * Created by dong on 2015/2/4.
 */

define(['../controllers'], function(controllers) {
  controllers.controller('withdrawDetail', ['$scope','getWithdrawDetail', function($scope,getWithdrawDetail) {

    getWithdrawDetail.getNewData({}, getWithdrawDetail_callback);


    function getWithdrawDetail_callback(data) {

      $scope.detail = data;
    }
  }])
})
