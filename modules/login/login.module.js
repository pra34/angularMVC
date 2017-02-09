(function() {
    'use strict';

    angular.module('routingDemoApp.login',[])

    .config(['$stateProvider',function($stateProvider) {
            // Now set up the states
            
            $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "modules/login/login.view.html",
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            });

        }]);
})();

