var app = angular.module('populador');
app.controller('MainController', ['$firebaseArray', function($firebaseArray){
    var self = this;

    var ref = firebase.database().ref().child('postsBase');
    this.posts = $firebaseArray(ref);

    this.enviarPost = function enviarPost(post){
        this.posts.$add(angular.copy(post));
        this.novoPost = {};
    };
}]);