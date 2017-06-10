(() => {
    'use-strict';
    app.controller('leisController', ['tagId', '$state', function (tagId, $state) {
        
        const STATE_LEI = "lei";
        
        const self = this;

        this.tagId = tagId;

        this.leis = criarLeis();

        this.getLeis = () => {
            return self.leis;
        };

        this.abrirDetalhes = lei => {
            $state.go(STATE_LEI, { leiId: lei.$id });
        };

        (() => {
            // buscar as leis;
        })();
    }]);
})();