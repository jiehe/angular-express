/**
 * Created by dong on 2015/2/4.
 */

define(['../controllers'], function(controllers) {
  controllers.controller('rechargeDetail', ['$scope','getRechargeDetail', function($scope,getRechargeDetail) {

    getRechargeDetail.getNewData({}, getRechargeDetail_callback);


    function getRechargeDetail_callback(data) {

      $scope.detail = data;
    }
  }])
})
