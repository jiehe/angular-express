define(['../directives'],function(directives){
  directives.directive('helloWorld',function(){
    return function(scope, element){
      element.text('helloworld');
    }
  });
});