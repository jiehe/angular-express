define(['../controllers', 'jquery'], function (controllers, $) {
  controllers.controller('record.header', [
    '$scope',
    'user',
    'recordHeader',
    'getRechargeRecord',
    'getTradeRecord',
    'getWithdrawRecord',
    function ($scope, user, recordHeader, getRechargeRecord, getTradeRecord, getWithdrawRecord) {

      $scope.currentBuyer = null;
      $scope.currentStatus = recordHeader.currentStatus;
      $scope.currentBuyerId = recordHeader.currentBuyerId;
      $scope.statusChange = statusChange;
      $scope.buyerChange = buyerChange;
      $scope.status = recordHeader.status;


      $('#startTime,#endTime').datetimepicker({
        maxView: 4,
        todayBtn: true,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0,
        format: 'yyyy-mm-dd'
      }).on('changeDate', function (ev) {
        if (ev.target.id == 'startTime') {
          $scope.startTime = $(this).val();
          recordHeader.startTime = new Date($scope.startTime).getTime() - 8 * 3600000;
        } else {
          $scope.endTime = $(this).val();
          recordHeader.endTime = new Date($scope.endTime).getTime() + 16 * 3600000 - 1;
        }
        $scope.$apply();
      });

      $scope.startTime = recordHeader.startTime;
      $scope.endTime = recordHeader.endTime;

      user.getData({}, user_callback);
      function user_callback(data) {
        $scope.models = data;
      }

      //改变状态刷新记录
      function statusChange() {
        recordHeader.currentStatus = $scope.currentStatus;
        reloadRecord();
      }

      function buyerChange() {
        if (!$scope.currentBuyer) {
          recordHeader.currentBuyerId = null;
        }else{
          recordHeader.currentBuyerId = $scope.currentBuyer.buyerId;
        }

        reloadRecord();
      }

      function reloadRecord() {
        switch(recordHeader.currentPage) {
          case 'recharge':
            getRechargeRecord.getData();
            break;
          case 'trade':
            getTradeRecord.getData();
            break;
          case 'withdraw' :
            getWithdrawRecord.getData();
            break;
        }
      }

    }])
});
