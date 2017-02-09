(function() {
    'use strict';

    angular.module('routingDemoApp.business',[])

    .config(['$stateProvider',function($stateProvider) {
            // Now set up the states
            
            $stateProvider
            .state('main.business.products', {
                url: "/products",
                templateUrl: "modules/product/products.html",
                controller: 'ProductController',
                controllerAs: 'productCtrl'
            })
            .state('main.business.services', {
                url: "/services",
                templateUrl: "modules/services/services.html",
                controller: 'ServiceController',
                controllerAs: 'serviceCtrl'
            });

        }]);
})();

