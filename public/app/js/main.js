'use strict';

require.config({
	paths: {
		angular: './../bower_components/angular/angular',
		uiRouter: './../bower_components/angular-ui-router/release/angular-ui-router',
		jquery:'./lib/jquery-1.9.1.min.js',
		jDialog:'./lib/jDialog',
		jCloud:'./lib/jqcloud-1.0.4.min.js',
		text: './../bower_components/requirejs-text/text'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'uiRouter': {
			deps:['angular']
		},
		'jDialog': {
			deps:['jquery'],
			'exports': 'jDialog'
		},
		'jCloud': {
			deps:['jquery']
		}
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
