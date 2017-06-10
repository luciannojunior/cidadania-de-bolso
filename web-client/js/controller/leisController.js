(() => {
    'use-strict';
    app.controller('leisController', ['tag', function (tag) {
        const self = this;

        this.tag = tag;

        this.leis = [{}];

        this.getLeis = () => {
            return self.leis;
        };

        (() => {
            // buscar as leis;
        })();
    }]);
})();