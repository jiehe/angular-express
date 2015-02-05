define(['../controllers','underscore'], function (controllers, _) {
  controllers.controller('trade', ['$scope', '$http', 'getTradeRecord',function ($scope, $http, getTradeRecord) {

    getTradeRecord.getData({}, getTradeRecord_callback);

    $scope.tradeRecord = '';
    function getTradeRecord_callback(data) {

      _.each(data,function(item, key){
        item.status = parseInt(item.status);
      })
      $scope.tradeRecord = data;
    }
  }])
});
