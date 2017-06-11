(() => {
    app.service('PostService', ['$http', '$q', '$firebaseArray', function ($http, $q, $firebaseArray) {

        const self = this;

        const BUSCA_ENDPOINT = "";
        const GET_LEI_ENDPOINT = "";

        var ref = firebase.database().ref().child('postsBase');

        this.posts = $firebaseArray(ref);
        console.log('EAE');
        this.posts.$loaded().then(function(){
            angular.forEach(self.posts, function(item){
                var el = self.posts.$getRecord(item.$id);

                el.tags = (el.tags.split) ? el.tags.split(',') : el.tags;
                el.upVotes =  el.upVotes || 0;
                el.downVotes =  el.downVotes || 0;

                self.posts.$save(el);
            });
        });

        let leisMock = {};

        this.buscarPorTag = tag => {
            return $q.when({ data: Object.values(leisMock) });
            // return $http.get(BUSCA_ENDPOINT);
        };

        this.getLei = id => {
            return $q.when({ data: leisMock[id] });
            // return $http.get(GET_LEI_ENDPOINT);
        };

        this.atualizarLei = lei => {
            leisMock[lei.$id] = lei;
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
            // criarMock();
        })();
    }]);
})();