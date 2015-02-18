var app = angular.module('app', ['ngRoute']);
app.controller('productController', function ($scope, $http) {
    $scope.message = "how are you?";
    $http.get('/odata/Products').success(function (data) {
        $scope.productList = data.value;
    })
            .error(function (error) {
                console.log(error);
            });
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/about', {
            templateUrl: 'Scripts/templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'Scripts/templates/contact.html'
        })
        .when('/', {
            templateUrl: 'Scripts/templates/home.html'
        });
});
