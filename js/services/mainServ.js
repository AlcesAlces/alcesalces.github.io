angular.module('polyint').factory('MainServ', function () {
    
    //This is my prefered method to bind stuff to the service, easier to manage a service that returns
    //2 variables rather than 100 variables :V
    this.init = function() {
        this.helloWorld = 'Hello, World!!';
    };

    this.clear = function() {

    };

    this.service = 
    {
        init: this.init,
        clear: this.clear
    };

    return this.service;
});