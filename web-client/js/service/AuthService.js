(() => {
    var app = angular.module('cidadaniaApp');

    app.service('AuthService', ['$firebaseAuth', function ($firebaseAuth) {

        const self = this;

        const provider = new firebase.auth.FacebookAuthProvider();

        this.isLogado = function(){
            return !!$firebaseAuth().$getAuth();
        };

        this.logar = function(){
            if (!this.isLogado()){
                firebase.auth().signInWithPopup(provider).then(function(result) {
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    // ...
                    console.log(user);
                }).catch(function(error) {
                    console.log(error);
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });
            }
        }
    }]);
})();