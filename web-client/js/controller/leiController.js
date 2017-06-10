(() => {
    'use-strict';
    app.controller('leiController', ['leiId', function (leiId) {
        const self = this;

        let isModoEdicao = false;

        this.lei = criarLei(leiId);

        this.isModoEdicao = () => isModoEdicao;

        this.upVote = () => {
            self.lei.upVotes++;
        };

        this.downVote = () => {
            self.lei.downVotes++;
        };

        this.ativarEdicao = () => {
            isModoEdicao = true;
        };
    }]);
})();