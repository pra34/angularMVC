(function() {
	'use strict';

	angular.module('routingDemoApp')
	.controller('BusinessController', BusinessController);

	// need to inject $log
	BusinessController.$inject = ['logger', '$localStorage', '$state'];

	function BusinessController(logger, $localStorage, $state) {
		logger.logError('from bussiness controller');

		var vm = this;
		vm.business_name = "Buying Apple";

		//method
		vm.logout = logout;

		function logout() {
			$localStorage.user.username = '';
			$localStorage.user.password = '';
			$state.go('login');
		}
	}	

})();
