(() => {
    app.service('PostService', ['$http', '$q', '$firebaseArray', '$firebaseObject', function ($http, $q, $firebaseArray, $firebaseObject) {

        const self = this;

        const BUSCA_ENDPOINT = "";
        const GET_LEI_ENDPOINT = "";

        var ref = firebase.database().ref().child('postsBase');

        this.posts = $firebaseArray(ref);

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

        this.buscarPorTag = tagUnica => {
            var copia = angular.copy(self.posts);
            return copia.filter(function (post){
                var temTag = false;
                post.tags.forEach(function(tag){
                    if (tag.toUpperCase() == tagUnica.toUpperCase()) temTag = true;
                });
                return temTag;
            });
        };

        this.buscarPorTitulo = function (titulo){
            var copia = angular.copy(self.posts);
            return copia.filter(function (post){
                return post.titulo.toUpperCase().includes(titulo.toUpperCase());
            });
        };

        this.getLei = id => {
            return $firebaseObject(ref.child(id));
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