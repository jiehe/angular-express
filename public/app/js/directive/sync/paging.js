define(['../directives'], function (directives) {
  directives.directive('paging', [
    '$stateParams',
    '$timeout',
    'pagingService',
    '$rootScope',
    function (stateParams,
              timeout,
              pagingService,
              $rootScope) {

      if (stateParams.pageSize) {

      }
      return {
        restrict: 'EA',
        templateUrl: 'app/tpl/directive/paging.html',
        scope: {
        },
        replace: true,
        link: function (scope, element, attr) {

          //绑定paging服务
          angular.extend(scope, pagingService)
          scope.$on('pagingChange', function () {
            angular.extend(scope, pagingService);
            handlerLogic();
          })

          //处理分页业务逻辑
          function handlerLogic() {
            scope.router = location.hash.substring(0, location.hash.indexOf('?') > -1 ? location.hash.indexOf('?') : location.hash.length) + '?pageSize=' + scope.pageSize + '&pageNum=';
            scope.selectPageNumFn = function(){
              var num = scope.selectPageNum;
              if(!num) {
                alert("请填写要跳转的页面！");
                return;
              }
              location.href = scope.router + num;
            }
            scope.pagingRepeat = [];
            for (var i = 1, len = scope.maxPage; i <= len; i++) {
              scope.pagingRepeat.push(i);
            }
          }
          handlerLogic();
        }

      }
    }])
})