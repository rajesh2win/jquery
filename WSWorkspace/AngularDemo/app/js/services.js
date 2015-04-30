'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

angular.module('myApp.services').service('helloService',function($timeout){
this.sayHello=function(){ // define an instance method
  $timeout(function(){
    alert('Hello '+name);
  },2000);
}
});
