(function() {
    var app = angular.module('linda', ['ui-router']);

    app.controller('PageController', function(){
        this.test = "Hello World!";
    });
})();
