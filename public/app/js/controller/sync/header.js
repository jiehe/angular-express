define(['../controllers','underscore'], function (controllers, _) {
  controllers.controller('header', ['$scope', 'user',function ($scope, user) {

    user.getData({}, user_callback);

    function user_callback(data) {
      $scope.message = data.message,
      $scope.query = data.query,
      $scope.model = data.model,
      $scope.success = data.success,
      $scope.resultCode = data.resultCode,
      $scope.models = data.models
    }
  }])
});
