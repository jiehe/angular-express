define(['../controllers', 'jquery'], function (controllers, $) {
  controllers.controller('record.header', ['$scope', '$http', function ($scope, $http) {

    $scope.status = ['充值中', '充值完成', '充值失败'];
    $('#startTime,#endTime').datetimepicker({
      maxView:4,
      todayBtn:true,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0,
      format:'yyyy - mm - dd'
    });



  }])
});
