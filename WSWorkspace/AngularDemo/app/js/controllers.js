'use strict';

/* Controllers */
angular.module('myApp.controllers', []);
angular.module('myApp.controllers').controller('FinanceController', function ($scope) {
    $scope.salary = 100;
    $scope.percentage = 5;
    $scope.result = function () {
        return $scope.salary * $scope.percentage * 0.01;
    };
});

angular.module('myApp').controller('GreetingController', function ($scope) {
    $scope.now = new Date();
    $scope.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
    $scope.greeting = $scope.helloMessages[0];
    $scope.getRandomHelloMessage = function () {
        $scope.greeting = $scope.helloMessages[parseInt((Math.random() * $scope.helloMessages.length))];
        $scope.now = new Date();
    }
});

angular.module('myApp.controllers').controller('SiteController', function ($scope) {
    $scope.publisher = 'SitePoint';
    $scope.type = "Web Development";
    $scope.name = "Scope for SiteController";
});
angular.module('myApp.controllers').controller('BookController'
    , function ($scope) {
        $scope.books = ['Jump Start HTML5', 'Jump Start CSS', 'Jump Start', 'Responsive Web Design'];
        $scope.name = "Scope for BookController";
        $scope.addToWishList = function () {
            $scope.wishListCount++;
        };
        $scope.wishListCount = 0;
        $scope.$watch('wishListCount', function (newValue, oldValue) {
            console.log('called ' + newValue + ' times' + 'oldValue = ' + oldValue);
            if (newValue == 2) {
                alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
            }

            if (newValue > 4) {
                $scope.wishListCount = 0;
            }
        });
    });

angular.module('myApp.controllers').controller('TimeoutController', function ($scope) {
    var count = 1;
    $scope.scheduleTask = function () {
        setTimeout(function () {
            count++;
            $scope.message = 'Fetched after 3 seconds' + count;
            console.log('message=' + $scope.message); //log this to console
        }, 3000);
    }
});

angular.module('myApp.controllers').controller('MessageController'
    , function ($scope, $timeout) {
        $scope.messages = [{
            sender: 'user1',
            text: 'Message1'
        }];
        var timer;
        var count = 0;
        $scope.loadMessages = function () {
            count++;
            $scope.messages.push({
                sender: 'user1',
                text: 'Random message' + count
            });
            timer = $timeout($scope.loadMessages, 2000);
            if (count == 3) {
                $scope.$broadcast('EVENT_NO_DATA', 'Not Connected');
                $timeout.cancel(timer);
            }
        };
        timer = $timeout($scope.loadMessages, 2000);
        $scope.$on('EVENT_RECEIVED', function () {
            console.log('Received emitted event');
        });
    });
angular.module('myApp.controllers').controller('StatsController'
    , function ($scope) {
        $scope.name = 'World';
        $scope.status = 'Connected';
        $scope.statusColor = 'green';
        $scope.$on('EVENT_NO_DATA', function (event, data) {
            console.log('received broadcasted event');
            $scope.status = data;
            $scope.statusColor = 'red';
            $scope.$emit('EVENT_RECEIVED');
        });
    });

angular.module('myApp.controllers').controller('partialsController1', function ($scope, $location) {
    $scope.loadView2 = function () {
        $location.path('/view2/' + $scope.firstname + '/' + $scope.lastname);
    }
}).controller('partialsController2', function ($scope, $routeParams, names) {
    $scope.firstname = $routeParams.firstname;
    $scope.lastname = $routeParams.lastname;
    $scope.names=names;
});

angular.module('myApp.controllers').controller('TestControllerService',
function(helloService, $scope){
    helloService.sayHello(); // helloService is the service object.It has sayHello function.
    $scope.testService = function() {
        helloService.sayHello();
    }
});

angular.module('myApp.controllers').controller('TestControllerFactory',
function(helloService) {
    helloService.sayHello('AngularJS'); //alerts Hello AngularJS
    helloService.echo('I Love AngularJS'); //alerts I Love AngularJS
});

angular.module('myApp.controllers').controller('TestController', function(greet) {
    greet('Sandeep'); // use the greet service
});