(function () {	
	'use strict';

	angular.module('routingDemoApp')
	.controller('ServiceController', ServiceController);

	// need to inject $log
	ServiceController.$inject = ['logger'];

	function ServiceController(logger) {
		logger.logError('from service controller');

		var vm = this;
		vm.services = ["Selling", "Support", "Delivery", "Reparation"];
	}	

})();
