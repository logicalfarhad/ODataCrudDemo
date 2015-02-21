(function () {
    var app = angular.module('app', ['ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'Scripts/templates/home.html'
            }).state('about', {
                url: '/about',
                templateUrl: 'Scripts/templates/about.html',
                controller: "productController"
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'Scripts/templates/contact.html',
                controller: "productController"
            });
    });
}());
