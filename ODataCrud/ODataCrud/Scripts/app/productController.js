(function () {
    var app = angular.module('app');
    var productController = function ($scope, $http, $stateParams) {
        $scope.productList = [];
        var onProductComplete = function (response) {
            $scope.productList = response.data.value;
        };
        var onError = function (response) {
            $scope.message = "No Product Found";
        };
        var onProductSave = function (response) {
            $scope.productList.push(response.data.value);
        }
        var onSaveError = function (response) {
            $scope.message = "Save Error";
        }
        $http.get('/odata/Products').then(onProductComplete, onError);

        $scope.Save = function (product) {
            $http.post("/odata/Products", product).then(onProductSave, onSaveError);
        }
    }
    app.controller("productController", ['$scope', '$http', productController]);
}());

