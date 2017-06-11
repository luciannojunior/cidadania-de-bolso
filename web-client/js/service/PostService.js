(() => {
    app.service('PostService', ['$http', function ($http) {

        const self = this;

        const BUSCA_ENDPOINT = "";
        const GET_LEI_ENDPOINT = "";

        this.buscarPorTag = tag => {
            return $http.get(BUSCA_ENDPOINT);
        };

        this.getLei = id => {
            return $http.get(GET_LEI_ENDPOINT);
        };

        this.atualizarLei = lei => {
            
        };
    }]);
})();