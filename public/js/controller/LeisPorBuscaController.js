(() => {
    'use-strict';
    app.controller('LeisPorBuscaController', ['busca', 'PostService', function (busca, PostService) {
        const self = this;

        const STATE_LEI = 'lei';
        this.tituloState = 'pela tag: ' + busca;
        
        this.leis = PostService.buscarPorTitulo(busca);
    }]);
})();