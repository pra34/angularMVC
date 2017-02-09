(function () {
    'use strict';

    angular
        .module('routingDemoApp.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', '$scope', '$state', '$localStorage', 'logger'];    

    function LoginController($rootScope, $scope, $state, $localStorage, logger) {

        // if user is already authenticate, then redirect to dash

        var vm = this;

        // properties
        vm.user = {};
        vm.error = '';
        vm.error_message = '';

        // methods
        vm.login = login;

        function login(form) {

            logger.logError(form);

            logger.logError(vm.user);
            if(vm.user.username == 'admin' && vm.user.password == 'admin') {
                $localStorage.user = vm.user;
                $rootScope.user = vm.user;
                $state.go('main');
            }else {

                vm.error = true;
                vm.error_message = 'Username = admin, Password = admin';

            }

        }

    }

})();
