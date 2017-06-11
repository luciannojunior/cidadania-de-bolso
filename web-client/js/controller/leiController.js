(() => {
    'use-strict';
    app.controller('leiController', ['leiId', 'PostService', function (leiId, PostService) {
        const self = this;

        let isModoEdicao = false;

        this.lei = {};

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

        this.salvarEdicoes = () => {
            isModoEdicao = false;
        };

        (() => {
            PostService.getLei(self.leiId)
                .then(data => {
                    self.lei = data.data;
                });
        })();
    }]);
})();