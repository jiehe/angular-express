define(['../controllers', 'jquery'], function (controllers, $) {
  controllers.controller('record.header', [
    '$scope',
    'user',
    'recordHeader',
    function ($scope, user, recordHeader) {

    $scope.currentBuyer = null;

    $scope.currentStatus = recordHeader.currentStatus;
    $scope.currentBuyerId = recordHeader.currentBuyerId;


    $scope.statusChange =statusChange;
    $scope.buyerChange =buyerChange;
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
    }).on('changeDate', function(ev){
      if(ev.target.id == 'startTime') {
        $scope.startTime = $(this).val();
        recordHeader.startTime = new Date($scope.startTime).getTime() - 8*3600000;
      } else {
        $scope.endTime = $(this).val();
        recordHeader.endTime =new Date($scope.endTime).getTime() + 16*3600000-1;
      }
      $scope.$apply();
    });

    $scope.startTime = recordHeader.startTime;
    $scope.endTime = recordHeader.endTime;

    user.getData({}, user_callback);
    function user_callback(data) {

      $scope.models = data;
    }
    function statusChange() {
      recordHeader.currentStatus = $scope.currentStatus;
    }

   function buyerChange() {
     if(!$scope.currentBuyer) {
       recordHeader.currentBuyerId = null;
       return;
     }
      recordHeader.currentBuyerId = $scope.currentBuyer.buyerId;

     user.init();
    }

  }])
});
