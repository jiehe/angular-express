define(['../controllers','underscore'], function (controllers, _) {
  controllers.controller('bankCardInfo', ['$scope', 'getBankCard', 'user', '$stateParams', function ($scope, getBankCard, user, $stateParams) {

    getBankCard.getData($stateParams, getBankCard_callback);

    function getBankCard_callback(data) {
      $scope.message = data.message,
      $scope.query = data.query,
      $scope.model = data.model,
      $scope.success = data.success,
      $scope.resultCode = data.resultCode,
      $scope.models = data.models;


      user.findUser(data.models[0].buyerId, function(currentUser) {
        $scope.accountName = currentUser.accountName;
        $scope.email = currentUser.email;
        $scope.active_time = currentUser.active_time;
      });


    }
  }])
});
