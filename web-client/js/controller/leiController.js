(() => {
    'use-strict';
    app.controller('leiController', ['nomeLei', function (nomeLei) {
        const self = this;

        this.lei = { nome: nomeLei, tags: [] };

        this.upVote = () => {};

        this.downVote = () => {};

        this.ativarEdicao = () => {};
    }]);
})();