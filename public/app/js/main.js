'use strict';

require.config({
	paths: {
		angular: './../bower_components/angular/angular',
		uiRouter: './../bower_components/angular-ui-router/release/angular-ui-router',
		jquery:'./lib/jquery-1.9.1.min',
		jDialog:'./lib/jDialog',
		jCloud:'./lib/jqcloud-1.0.4.min',
		datetimepicker:'./lib/bootstrap-datetimepicker',
		text: './../bower_components/requirejs-text/text',
		bootstrap: './../bower_components/bootstrap/dist/js/bootstrap.min',
		underscore: './../bower_components/underscore/underscore-min',
		fileUpload: './../bower_components/angular-file-upload/angular-file-upload.min'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'uiRouter': {
			deps:['angular']
		},
		'fileUpload': {
			deps:['angular']
		},
		'jDialog': {
			deps:['jquery'],
			'exports': 'jDialog'
		},
		'jCloud': {
			deps:['jquery']
		},
		'bootstrap': {
			deps:['jquery']
		},
		'datetimepicker': {
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
	'routes',
	'bootstrap',
	'datetimepicker'
], function(angular, app, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
