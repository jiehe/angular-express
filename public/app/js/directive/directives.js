'use strict';

define(['angular', 'services'], function(angular, services) {

	/* Directives */
	
	return angular.module('myApp.directives', ['myApp.services'])
		.directive('helloFeifei',function($document,$injector){
			var startX=0, startY=0, x = 0, y = 0;
			return function(scope, element){
				require(['directive/async/draggable'],function(dragable){
					return dragable;
				})
			}
		})

});
