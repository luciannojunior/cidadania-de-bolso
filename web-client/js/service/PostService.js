(() => {
    app.service('PostService', ['$http', '$q', function ($http, $q) {

        const self = this;

        const BUSCA_ENDPOINT = "";
        const GET_LEI_ENDPOINT = "";

        let leisMock = {};

        this.buscarPorTag = tag => {
            return $q.when({ data: leisMock });
            return $http.get(BUSCA_ENDPOINT);
        };

        this.getLei = id => {
            return $q.when({ data: leisMock[id] });
            // return $http.get(GET_LEI_ENDPOINT);
        };

        this.atualizarLei = lei => {
            leisMock[lei.$id] = id;
            return $q.when({ data: lei });
            // atualizar firebase
        };

        const criarMock = () => {
            const leis = criarLeis();
            leis.forEach((item) => {
                leisMock[item.$id] = item;
            });
        }

        (() => {
            criarMock();
        })();
    }]);
})();