(() => {
    'use-strict';
    app.controller('LeisPorTagController', ['tag', 'PostService', function (tag, PostService) {
        const self = this;

        const STATE_LEI = 'lei';
        this.tituloState = 'pela tag: ' + tag;
        
        this.leis = PostService.buscarPorTag(tag);
    }]);
})();