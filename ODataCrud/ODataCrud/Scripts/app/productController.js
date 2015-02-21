(function () {
    var app = angular.module('app');
    var productController = function ($scope, $http) {
        $scope.message = "how are you?";
        var onProductComplete = function (response) {
            $scope.productList = response.data.value;
        };
        var onError = function (response) {
            $scope.message = "No Product Found";
        };
        $http.get('/odata/Products').then(onProductComplete, onError);
    }
    app.controller("productController", productController);
}());

