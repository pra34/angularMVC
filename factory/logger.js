angular
    .module('routingDemoApp')
    .factory('logger', logger);

function logger() {
    return {
        logError: function(msg) {
        	console.log(msg);
        }
   };
}