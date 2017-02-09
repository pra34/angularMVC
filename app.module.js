(function() {
	'use strict';

	angular.module('routingDemoApp',
		[
		'ui.router',
		'ngStorage',

	// sub modules
	'routingDemoApp.login',
	'routingDemoApp.business'
	
	])

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

			// For any unmatched url, send to /business
			$urlRouterProvider.otherwise("login")
			
			$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'includes/main.html',
				controller: 'BusinessController',
				controllerAs: 'mainCtrl'
			})
			.state('main.business', {
				url: "business",
				templateUrl: "modules/business/business.html",
				controller: 'BusinessController',
				controllerAs: 'businessCtrl'
			})
			.state('main.portfolio', {
				url: "portfolio",
				views: {
					"" 	: { 
						templateUrl: "modules/portfolio/portfolio.html" },
						controller: 'PortfolioController',
						controllerAs: 'portfolioCtrl',
						"view1@main.portfolio":  { 
							template: "Write whatever you want, it's your virtual company." 
						},
						"view2@main.portfolio":  { 
							templateUrl: "modules/clients/client.html" ,
							controller: 'ClientController',
							controllerAs: 'clientCtrl'
						},
						"view3@main.portfolio" : { 
							template: "Okay, this is my new stuff in Portfolio." 
						}
					}
				});

		}])
.run(['$rootScope','$state', '$localStorage', function ($rootScope, $state, $localStorage) {

	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

		if( toState.name == 'login' && ($localStorage.user.username == 'admin' && $localStorage.user.password == 'admin')) {
			console.log('redirecting to main');
			$state.go('main');
			event.preventDefault();
			return;
		}

		if( toState.name != 'login' && ($localStorage.user.username != 'admin' || $localStorage.user.password != 'admin')) {
			console.log('redirecting to login');
			$state.transitionTo('login');
			event.preventDefault();
			return;
		}

	});
}]);

})();
