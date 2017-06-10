(() => {
    'use-strict';
    app.controller('leiController', ['nomeLei', function (nomeLei) {
        const self = this;

        this.lei = criarLei(nomeLei);

        this.upVote = () => { 
            self.lei.upVotes++;
        };

        this.downVote = () => { 
            self.lei.downVotes++;
        };

        this.ativarEdicao = () => { };
    }]);
})();