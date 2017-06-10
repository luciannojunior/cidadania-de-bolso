(() => {
    'use-strict';
    app.controller('leisController', ['tag', function (tag) {
        const self = this;

        this.tag = tag;

        this.leis = [criarLei(),criarLei(),criarLei(),criarLei(), criarLei(), criarLei(), criarLei()];

        this.getLeis = () => {
            return self.leis;
        };

        (() => {
            // buscar as leis;
        })();
    }]);
})();