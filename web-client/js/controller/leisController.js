(() => {
    'use-strict';
    app.controller('leisController', ['tag', '$state', function (tag, $state) {
        
        const STATE_LEI = "lei";
        
        const self = this;

        this.tag = tag;

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