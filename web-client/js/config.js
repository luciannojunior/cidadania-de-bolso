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

function criarLei(nomeLei) {
    return {
        nome: nomeLei || "Nome genérico",
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo sed lectus varius dictum eget nec elit. Quisque        faucibus viverra dui non molestie. Donec pretium mi lacus, quis varius est tincidunt at. Mauris tincidunt nulla non velit varius posuere.Integer eu auctor turpis. Etiam quis porttitor ex, non volutpat metus. In hac habitasse platea dictumst. Donec malesuada blandit pretium. Cras volutpat ut erat sed ultricies.Sed blandit justo vel arcu lacinia, quis ultricies leo tincidunt.',
        upVotes: 0,
        downVotes: 0,
        tags: []
    };
}