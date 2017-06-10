const app = angular.module('cidadaniaApp', ['ngMaterial', 'ui.router']);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });

        // $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'view/tags.html'
            })
            .state('lei', {
                url: '/lei/:nomeLei',
                templateUrl: 'view/detalhes.html',
                controller: 'leiController as leiCtrl',
                resolve: {
                    nomeLei: function ($stateParams) {
                        return $stateParams.nomeLei;
                    }
                }
            });
    }]);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
            console.log(event, error);
        });
}]);