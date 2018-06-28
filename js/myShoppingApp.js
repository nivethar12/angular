var app = angular.module("myShoppingApp", ['ngRoute','ngMessages']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/login', {
       templateUrl: 'partials/login.html', controller: 'loginCtrl'
    })
    .when('/register', {
       templateUrl: 'partials/register.html', controller: 'registerCtrl'
    })
    .when('/product', {
        templateUrl: 'partials/product.html', controller: 'productCtrl'
     }) 
    .otherwise({
       redirectTo: '/'
    });     
 }]);