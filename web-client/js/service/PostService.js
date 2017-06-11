(() => {
    app.service('PostService', ['$http', '$q', '$firebaseArray', '$firebaseObject', function ($http, $q, $firebaseArray, $firebaseObject) {

        const self = this;

        const BUSCA_ENDPOINT = "";
        const GET_LEI_ENDPOINT = "";

        var ref = firebase.database().ref().child('postsBase');
        
        this.posts = DADOS

        // this.posts.$loaded().then(function(){
        //     console.log('As leis foram carregadas')
        //     angular.forEach(self.posts, function(item){
        //         var el = self.posts.$getRecord(item.$id);

        //         el.tags = (el.tags.split) ? el.tags.split(',') : el.tags;
        //         el.upVotes =  el.upVotes || 0;
        //         el.downVotes =  el.downVotes || 0;

        //         self.posts.$save(el);
        //     });
        // });

        let leisMock = {};

        this.buscarPorTag = tagUnica => {
            console.log(DADOS);
            var copia = angular.copy(self.posts);
            var final = copia.filter(function (post){
                var temTag = false;
                post.tags.forEach(function(tag){
                    console.log(tag);
                    if (tag.toUpperCase().trim() == tagUnica.toUpperCase().trim()) temTag = true;
                });
                return temTag;
            });
            return final;
        };

        this.buscarPorTitulo = function (titulo){
            var copia = angular.copy(self.posts);
            return copia.filter(function (post){
                return post.titulo.toUpperCase().includes(titulo.toUpperCase());
            });
        };

        this.getLei = id => {
            return bruto[id];
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