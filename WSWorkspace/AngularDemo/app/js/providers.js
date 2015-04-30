angular.module('myApp.providers',[]).provider('greet', function() {
    this.greeting = 'Hello'; //we can configure this.    The default is Hello.
        this.$get = function() { //this will be called to obtain greet service
        var greeting = this.greeting;
        return function(name) {
            alert(greeting + ', ' + name);
        }
    }
    this.setGreeting = function(greeting) { //setter for greeting text
        this.greeting = greeting;
    }
});