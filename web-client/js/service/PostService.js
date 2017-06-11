(() => {
    app.service('PostService', ['$http', function ($http) {

        const self = this;

        const BUSCA_ENDPOINT = "";

        this.buscarPorTag = (tag) => {
            return $http.get(BUSCA_ENDPOINT);
        };
    }]);
})();