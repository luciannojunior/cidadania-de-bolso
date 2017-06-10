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
                url: '/lei/:leiId',
                templateUrl: 'view/detalhesLei.html',
                controller: 'leiController as leiCtrl',
                resolve: {
                    leiId: ($stateParams) => {
                        return $stateParams.leiId;
                    }
                }
            })
            .state('leisBuscadas', {
                url: '/leisBuscadas/:tagId',
                templateUrl: 'view/leisBuscadas.html',
                controller: 'leisController as leisCtrl',
                resolve: {
                    tagId: ($stateParams) => {
                        return $stateParams.tagId;
                    }
                }
            });
    }]);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
            console.log(event, error);
        });
    
    $rootScope.colors = {
        cardLei: { background: 'grey-200' },
        curtir: { background: 'light-green-A700' },
        descurtir: { background: 'red-A700' },
        botao: { background: 'grey-300' } 
    };
}]);

/// MOCK
const leis = {};

function criarLei(leiId) {
    if (leis[leiId]) {
        return leis[leiId];
    }
    const lei = {
        nome: "Nome genérico " + leiId,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo sed lectus varius dictum eget nec elit. Quisque        faucibus viverra dui non molestie. Donec pretium mi lacus, quis varius est tincidunt at. Mauris tincidunt nulla non velit varius posuere.Integer eu auctor turpis. Etiam quis porttitor ex, non volutpat metus. In hac habitasse platea dictumst. Donec malesuada blandit pretium. Cras volutpat ut erat sed ultricies.Sed blandit justo vel arcu lacinia, quis ultricies leo tincidunt.',
        upVotes: 0,
        downVotes: 0,
        tags: [],
        $id: leiId || Math.round(Math.random() * 1000)
    };
    leis[lei.$id] = lei;
    return lei;
}

let a = [];

function criarLeis() {
    if (a.length > 0) {
        return a;
    }
    a = [criarLei(),criarLei(),criarLei(),criarLei(),criarLei(),criarLei(),criarLei(),criarLei()];
    return a;
}