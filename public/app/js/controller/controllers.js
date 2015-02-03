'use strict';

define(['angular', 'services'], function (angular) {

  /* Controllers */

  return angular.module('myApp.controllers', ['myApp.services'])

    .controller('MyCtrl2', ['$scope', '$injector', function ($scope, $injector) {
      require(['myctrl2'], function (myctrl2) {
        $injector.invoke(myctrl2, this, {'$scope': $scope});
      });
    }])
});
