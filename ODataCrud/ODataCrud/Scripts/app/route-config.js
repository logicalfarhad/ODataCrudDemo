(function () {
    var config = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'Scripts/templates/home.html',
                controller: "productController",
                controllerAs: 'vm'
            })
            .state('add', {
                url: "person/new",
                templateUrl: "Scripts/templates/create.html",
                controller: "productController",
                controllerAs: 'vm'
            }).state('edit', {
                url: '/person/edit/:Id',
                templateUrl: 'Scripts/templates/edit.html',
                controller: "productController",
                controllerAs: 'vm'
            }).state('delete', {
                url: '/person/delete/:Id',
                templateUrl: 'Scripts/templates/delete.html',
                controller: "productController",
                controllerAs: 'vm'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'Scripts/templates/about.html',
                controller: "productController",
                controllerAs: 'vm'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'Scripts/templates/contact.html',
                controller: "productController",
                controllerAs: 'vm'
            });
    }
    angular.module('app').config(config);
}());
