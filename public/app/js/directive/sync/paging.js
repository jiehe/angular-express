

define(['../directives'], function(directives){
  directives.directive('paging', ['$stateParams', '$timeout', function(stateParams, timeout) {

    if(stateParams.pageSize){

    }
    return {
      restrict: 'EA',
      templateUrl: 'app/tpl/directive/paging.html',
      scope:{
        maxPage: '@',
        pageNum: '@',
        total: '@',
        pageSize: '@'
      },
      replace:true,
      link:function(scope, element, attr){

        scope.$watch(scope.pageNum, function(newVal) {
          scope.pageNum = newVal;
          timeout(refresh, 500);
        })

        scope.$watch(scope.pageSize, function(newVal) {
          scope.pageSize = newVal;
          timeout(refresh, 500);
        })

        scope.$watch(scope.maxPage, function(newVal) {
          scope.maxPage = newVal;
          timeout(refresh, 500);
        })


        function refresh() {
          scope.router = location.hash.substring(0,location.hash.indexOf('?')>-1?location.hash.indexOf('?'): location.hash.length) +'?pageSize='+scope.pageSize+'&pageNum=';
          scope.pageNum = parseInt(scope.pageNum);
          scope.pagingRepeat = [];
          for(var i = 1,len = parseInt(scope.maxPage); i <=len; i++){
            scope.pagingRepeat.push(i);
          }
        }
      }
    }
  }])
})