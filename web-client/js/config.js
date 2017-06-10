const app = angular.module('cidadaniaApp', ['ngMaterial', 'ui.router']);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('lei.visualizar', {
            url: '/lei/{leiNome}',
            templateUrl: 'view/detalhes.html',
            controller: 'leiController as leiCtrl',
            resolve: {
                lei: function ($stateParams) {
                    const nome = $stateParams.leiNome;
                    return nome;
                }
            }
        });
}]);
