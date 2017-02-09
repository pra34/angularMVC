(function() {
	'use strict';

	angular.module('routingDemoApp')
	.controller('BusinessController', BusinessController);

	// need to inject $log
	BusinessController.$inject = ['logger'];

	function BusinessController(logger) {
		logger.logError('from bussiness controller');

		var vm = this;
		vm.business_name = "Buying Apple";
	}	

})();
