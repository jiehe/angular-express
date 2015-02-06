define(['../controllers', 'jquery'], function (controllers, $) {
  controllers.controller('record.header', ['$scope', 'user', function ($scope, user) {

    $scope.status = ['充值中', '充值完成', '充值失败'];
    $('#startTime,#endTime').datetimepicker({
      maxView: 4,
      todayBtn: true,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      minView: 2,
      forceParse: 0,
      format: 'yyyy - mm - dd'
    });
    user.getData({}, user_callback);
    function user_callback(data) {
      $scope.message = data.message;
      $scope.query = data.query;
      $scope.model = data.model;
      $scope.success = data.success;
      $scope.resultCode = data.resultCode;
      $scope.models = data.models;
    }

  }])
});
