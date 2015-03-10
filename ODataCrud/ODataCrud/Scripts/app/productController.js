(function () {
    var productController = function ($http, $stateParams) {
        var vm = this;
        vm.editUrl = $stateParams.Id;
        vm.productList = [];
        var onProductComplete = function (response) {
            vm.productList = response.data.value;
            
        };
        var onError = function (response) {
            vm.message = "No Product Found";
        };
        var onProductSave = function (response) {
            vm.productList.push(response.data.value);
        }
        var onSaveError = function (response) {
            vm.message = "Save Error";
        }
        $http.get('/odata/Products').then(onProductComplete, onError);

        vm.Save = function (product) {
            $http.post("/odata/Products", product).then(onProductSave, onSaveError);
        }
    }
    angular.module('app').controller('productController', productController);
}());

