define(['../controllers','underscore'], function (controllers, _) {
  controllers.controller('users', [
    '$scope',
    '$http',
    'getRechargeRecord',
    'user' ,
    '$stateParams',
    function ($scope, $http, getRechargeRecord,user, stateParams) {

      user.init = init;
      $scope.models;
    function init() {
      user.getData({}, users_callback);


      function users_callback(data) {
        $scope.models =  data;
      }
    }

      init();
  }])
});
