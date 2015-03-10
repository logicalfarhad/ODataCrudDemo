(function () {
    var config = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'Scripts/templates/home.html',
                controller: "productController"
            })
            .state('add', {
                url: "person/new",
                templateUrl: "Scripts/templates/create.html",
                controller: "productController"
            }).state('edit', {
                url: '/person/edit/:Id',
                templateUrl: 'Scripts/templates/edit.html',
                controller: "productController"
            }).state('delete', {
                url: '/person/delete/:Id',
                templateUrl: 'Scripts/templates/delete.html',
                controller: "productController"
            })
            .state('about', {
                url: '/about',
                templateUrl: 'Scripts/templates/about.html',
                controller: "productController"
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'Scripts/templates/contact.html',
                controller: "productController"
            });
    }
    angular.module('app').config(config);
}());
