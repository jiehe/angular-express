

define(['../directives'], function(directives){
  directives.directive('paging', ['$stateParams', function(stateParams) {

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
      link:function(scope, element, attr){

        if(stateParams.pageSize){
          scope.pageSize = scope.pageSize? parseInt(scope.pageSize): 10;
        }
        scope.router = location.hash.substring(0,location.hash.indexOf('?')>-1?location.hash.indexOf('?'): location.hash.length) +'?pageSize='+scope.pageSize+'&pageNum=';
        scope.pageNum = parseInt(scope.pageNum);
        scope.pagingRepeat = [];
        for(var i = 1,len = parseInt(scope.maxPage); i <=len; i++){
          scope.pagingRepeat.push(i);
        }
      }
    }
  }])
})