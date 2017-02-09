(function() {	
	'use strict';

	angular.module('routingDemoApp')
	.controller('ClientController', ClientController);

	// need to inject $log
	ClientController.$inject = ['logger'];

	function ClientController(logger) {
		logger.logError('from client controller');

		var vm = this;
		vm.clients = ["HP", "IBM", "MicroSoft"];
	}	

})();

