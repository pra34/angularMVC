(function() {		
	'use strict';

	angular.module('routingDemoApp')
	.controller('PortfolioController', PortfolioController);

	// need to inject $log
	PortfolioController.$inject = ['logger'];

	function PortfolioController(logger) {
		logger.logError('from portfolio controller');

		var vm = this;
		vm.message = "This is my Portfolio";
	}	
	
})();

