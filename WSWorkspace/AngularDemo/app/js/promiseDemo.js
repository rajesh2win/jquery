angular.module('promiseApp', []).controller('PromiseController', function($scope, $q, $interval) {

    $scope.getAsyncMessage = function() {

        var promise = $scope.getPromise();

        promise.then(function(message) {
            $scope.status = 'Resolved : ' + message;
        }, function(message) {
            $scope.status = 'Rejected : ' + message;
        }, function(message) {
            $scope.status = 'Notifying : ' + message;
        });
    }

    $scope.getPromise = function() {
        var i = 0;
        var deferred = $q.defer();

        var timer = $interval(function() {

            if ( !! $scope.cancelRequested) {
                deferred.reject('Promise Rejected due to cancellation.');
                $interval.cancel(timer);
            }

            i = i + 1;

            if (i == 5) {
                deferred.resolve('Counter has reached 5');
                $interval.cancel(timer);
            } else {
                deferred.notify('Counter has reached ' + i);
            }
        }, 1000);
        return deferred.promise;
    }
});