'use strict';

define(['angular'], function (angular) {
	
	/* Services */

	// Demonstrate how to register services
	// In this case it is a simple value service.
	angular.module('myApp.services', [])
		.value('appVersion', '0.1');
});
