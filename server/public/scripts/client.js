const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    })
    .when('/rentals', {
        templateUrl: 'views/rentals.html',
        controller: 'RentalController as rc'
    }).when('/sales', {
        templateUrl: 'views/sales.html',
        controller: 'SalesController as sc'
    }).otherwise({
        templateUrl: 'views/404.html'
    });
});