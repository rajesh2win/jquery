'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]);
/*angular.module('myApp').config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
 $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
 $routeProvider.otherwise({redirectTo: '/view1'});
 }]);*/
/*angular.module('myApp').config(['$routeProvider', function($routeProvider){
 $routeProvider.when('/view1',{
 controller:'partialsController1',
 templateUrl:'partials/partial1.html'
 }).when('/view2/:firstname/:lastname',{
 controller: 'partialsController2',
 templateUrl: 'partials/partial2.html',
     resolve: {
         names : function() {
             return ['Misko', 'Vojta', 'Brad'];
         }
     }
 }).otherwise({redirectTo:'/view1'});
 //$locationProvider.html5Mode(true);
 }]);*/
angular.module('myApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        controller: 'partialsController1',
        templateUrl: '/view1.tpl'
    }).when('/view2/:firstname/:lastname', {
        controller: 'partialsController2',
        templateUrl: '/view2.tpl',
        resolve: {
            names : function() {
                return ['Misko', 'Vojta', 'Brad'];
            }
        }
    }).otherwise({redirectTo: '/view1'});
    //$locationProvider.html5Mode(true);
}]);

angular.module('myApp').run(function ($rootScope) {
    $rootScope.title = 'Famous Books';
    $rootScope.name = "Root Scope";
});

/*angular.module('myApp').config(function(greetProvider) { //get the provider injected
    greetProvider.setGreeting('Hola'); //configure our provider
});*/
