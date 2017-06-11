(() => {
    'use-strict';
    app.controller('buscaController', ['$state', function ($state) {
        const self = this;

        const STATE_BUSCA = 'leisBuscadas';

        this.buscar = tag => {
            $state.go(STATE_BUSCA, { tag: tag });
        };
    }]);
})();