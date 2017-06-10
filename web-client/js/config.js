(() => {
    const app = angular.module('cidadaniaApp', ['ngMaterial', 'ui.router']);

    app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'view/tags.html',
                controller: 'HomeController'
            });
    }]);
})();
