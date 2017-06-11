const app = angular.module('cidadaniaApp', ['ngMaterial', 'ui.router', 'firebase']);

var config = {
    apiKey: "AIzaSyBPJ_KHIW3ltYAT5wy966JXB8U6VpsFCKM",
    authDomain: "cidadania-de-bolso.firebaseapp.com",
    databaseURL: "https://cidadania-de-bolso.firebaseio.com",
    projectId: "cidadania-de-bolso",
    storageBucket: "cidadania-de-bolso.appspot.com",
    messagingSenderId: "1079420002785"
  };
  firebase.initializeApp(config);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider) {
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
            .state('leisPorTag', {
                url: '/leisPorTag/:tag',
                templateUrl: 'view/leisBuscadas.html',
                controller: 'LeisPorTagController as vm',
                resolve: {
                    tag: ($stateParams) => {
                        return $stateParams.tag;
                    }
                }
            })
            .state('leisPorBusca', {
                url: '/leisPorBusca/:tag',
                templateUrl: 'view/leisBuscadas.html',
                controller: 'LeisPorBuscaController as vm',
                resolve: {
                    busca: ($stateParams) => {
                        return $stateParams.busca;
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
        cardLei: { background: 'grey-300' },
        curtir: { background: 'light-green-A700' },
        descurtir: { background: 'red-A700' },
        botao: { background: 'grey-300' },
        background: { background: 'grey-500' } 
    };
}]);

/// MOCK
const leis = {};

function criarLei(leiId) {
    if (leis[leiId]) {
        return leis[leiId];
    }
    const lei = {
        nome: "Nome genérico ",
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet leo sed lectus varius dictum eget nec elit. Quisque        faucibus viverra dui non molestie. Donec pretium mi lacus, quis varius est tincidunt at. Mauris tincidunt nulla non velit varius posuere.Integer eu auctor turpis. Etiam quis porttitor ex, non volutpat metus. In hac habitasse platea dictumst. Donec malesuada blandit pretium. Cras volutpat ut erat sed ultricies.Sed blandit justo vel arcu lacinia, quis ultricies leo tincidunt.',
        upVotes: 0,
        downVotes: 0,
        tags: [],
        $id: leiId || Math.round(Math.random() * 1000)
    };
    lei.nome += lei.$id;
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