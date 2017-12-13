// Initialize Firebase
let config = {
    projectId: "the-guy-s-list",
    apiKey: "AIzaSyCoIQXj0pBYQ39_gBzlKv3vQtihRPsPtNY",
    authDomain: "the-guy-s-list.firebaseapp.com",
    databaseURL: "https://the-guy-s-list.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "134665778083"
};
firebase.initializeApp(config);

let database;

$.ajax({
    type: 'GET',
    dataType: 'application/json',
    async: false,
    //Change these when debugging
    // url: 'http://localhost:63343/TierlistTemplate/js/thelist.json',
    url: './js/thelist.json',
    complete: function(data) {
        database = JSON.parse(data.responseText);
    }
});


//Angular
let app = angular.module("tierlist", []);

app.config([
    '$interpolateProvider', function($interpolateProvider) {
        return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);

app.controller("TierListController", function TierListController ($scope) {

    $scope.loading = true;

/*    firebase.database().ref('/version/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.version = snapshot.val();
        });
    });*/

    $scope.version = database.version;

/*    firebase.database().ref('/alerts/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.alerts = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.alerts = $.map(database.alerts, function(element) {
        return element;
    });
/*
    firebase.database().ref('/Primaries/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Primaries = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Primaries = $.map(database.Primaries, function(element) {
        return element;
    });

/*    firebase.database().ref('/Secondaries/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Secondaries = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Secondaries = $.map(database.Secondaries, function(element) {
        return element;
    });

/*    firebase.database().ref('/Melees/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Melees = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Melees = $.map(database.Melees, function(element) {
        return element;
    });

    /*firebase.database().ref('/Frames/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Frames = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Frames = $.map(database.Frames, function(element) {
        return element;
    });

    /*firebase.database().ref('/Schools/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Schools = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Schools = $.map(database.Schools, function(element) {
        return element;
    });

    /*firebase.database().ref('/Archwings/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Archwings = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Archwings = $.map(database.Archwings, function(element) {
        return element;
    });

    /*firebase.database().ref('/Archguns/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Archguns = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Archguns = $.map(database.Archguns, function(element) {
        return element;
    });

    /*firebase.database().ref('/Archmelees/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Archmelees = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Archmelees = $.map(database.Archmelees, function(element) {
        return element;
    });

    /*firebase.database().ref('/Companions/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Companions = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Companions = $.map(database.Companions, function(element) {
        return element;
    });

    /*firebase.database().ref('/Sentweps/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Sentweps = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });*/

    $scope.Sentweps = $.map(database.Sentweps, function(element) {
        return element;
    });

    /*firebase.database().ref('/Tiers/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function() {
            $scope.Tiers = $.map(snapshot.val(), function(element) {
                return element;
            });

            $('.loadingScreen').addClass("fadeOut");

            setTimeout(function () {
                $scope.$apply(function(){
                    $scope.loading = false;
                });
            }, 2000);
        });
    });*/

    $scope.Tiers = $.map(database.Tiers, function(element) {
        return element;
    });

    $('.loadingScreen').addClass("fadeOut");

    setTimeout(function () {
        $scope.$apply(function(){
            $scope.loading = false;
        });
    }, 2000);

    $scope.categories = ['Primaries', 'Secondaries', 'Melee', /*'Frames',*/ 'Schools', 'Archwings', 'Archguns', 'Archmelees', 'Companions'];

    // firebase.database().goOffline();
});
