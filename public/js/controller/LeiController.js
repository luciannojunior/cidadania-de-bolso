    'use-strict';
    app.controller('leiController', ['leiId', 'PostService', '$mdDialog', 'AuthService',  function (leiId, PostService, $mdDialog, AuthService) {
        const self = this;

        let isModoEdicao = false;

        this.lei = {};

        this.isModoEdicao = () => isModoEdicao;

        this.upVote = () => {
            self.lei.upVotes++;
        };

        this.downVote = () => {
            AuthService.logar();
            self.lei.downVotes++;
        };

        this.ativarEdicao = () => {
            isModoEdicao = true;
        };

        this.salvarEdicoes = () => {
            $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('body')))
                .clickOutsideToClose(true)
                .title('Sua alteração foi enviada')
                .textContent('Nossos especialistas irão revisá-la e a gente te avisa. Obrigado por contribuir')
                .ariaLabel('Modal de Sucesso')
                .ok('Ótimo')
            );
            isModoEdicao = false;
            return PostService.atualizarLei(self.lei);
        };

        (() => {
            self.lei = PostService.getLei(leiId);
        })();
    }]);