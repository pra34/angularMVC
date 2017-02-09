(function() {		
	'use strict';

	angular.module('routingDemoApp')
	.controller('ProductController', ProductController);

	// need to inject $log
	ProductController.$inject = ['logger'];

	function ProductController(logger) {
		logger.logError('from product controller');

		var vm = this;
		vm.products = ["Computer", "Printers", "Phones", "Bags"];
	}	

})();

