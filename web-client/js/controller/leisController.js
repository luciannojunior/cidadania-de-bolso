(() => {
    'use-strict';
    app.controller('leisController', ['tag', '$state', 'PostService', function (tag, $state, PostService) {

        const STATE_LEI = "lei";

        const self = this;

        this.tag = tag;

        this.leis = PostService.posts;

        this.getLeis = () => {
            return self.leis;
        };

        this.abrirDetalhes = lei => {
            console.log("indo", lei);
            $state.go(STATE_LEI, { leiId: lei.$id });
        };

        (() => {
            PostService.buscarPorTag(self.tag)
                .then(data => {
                    self.leis = data.data;
                });
        })();
    }]);
})();