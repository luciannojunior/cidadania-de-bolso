var app = angular.module('populador', ['ngMaterial', 'firebase']);

var config = {
    apiKey: "AIzaSyBPJ_KHIW3ltYAT5wy966JXB8U6VpsFCKM",
    authDomain: "cidadania-de-bolso.firebaseapp.com",
    databaseURL: "https://cidadania-de-bolso.firebaseio.com",
    projectId: "cidadania-de-bolso",
    storageBucket: "cidadania-de-bolso.appspot.com",
    messagingSenderId: "1079420002785"
  };
  firebase.initializeApp(config);

app
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });
