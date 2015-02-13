define(['../controllers','underscore'], function (controllers, _) {
  controllers.controller('bankCardInfo', ['$scope', 'getBankCard', 'user', '$stateParams', function ($scope, getBankCard, user, $stateParams) {

    getBankCard.getData($stateParams, getBankCard_callback);

    function getBankCard_callback(data) {

      $scope.models = data;


      user.findUser(data[0].buyerId, function(currentUser) {
        $scope.accountName = currentUser.accountName;
        $scope.email = currentUser.email;
        $scope.activeTime = currentUser.activeTime;
      });


    }
  }])
});
