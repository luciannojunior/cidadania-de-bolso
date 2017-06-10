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

                templateUrl: 'view/tags.html',
                controller: 'HomeController'
            })
            .state('lei', {
                url: '/lei/:nomeLei',
                templateUrl: 'view/detalhesLei.html',
                controller: 'leiController as leiCtrl',
                resolve: {
                    nomeLei: ($stateParams) => {
                        return $stateParams.nomeLei;
                    }
                }
            })
            .state('leisBuscadas', {
                url: '/leisBuscadas/:tag',
                templateUrl: 'view/leisBuscadas.html',
                controller: 'leisController as leisCtrl',
                resolve: {
                    tag: ($stateParams) => {
                        return $stateParams.tag;
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