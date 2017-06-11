(() => {
    'use-strict';
    app.controller('buscaController', ['$state', function ($state) {
        const self = this;

        const STATE_BUSCA = 'leisPorBusca';

        this.buscar = tag => {
            $state.go(STATE_BUSCA, { busca: tag });
        };
    }]);
})();