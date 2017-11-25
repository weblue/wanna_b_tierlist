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

//Angular
let app = angular.module("tierlist", []);

app.config([
    '$interpolateProvider', function($interpolateProvider) {
        return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);

app.controller("TierListController", function TierListController ($scope) {

    $scope.loading = true;

    firebase.database().ref('/version/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.version = snapshot.val();
        });
    });

    firebase.database().ref('/alerts/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.alerts = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Primaries/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Primaries = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Secondaries/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Secondaries = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Melees/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Melees = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Frames/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Frames = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Schools/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Schools = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Archwings/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Archwings = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Archguns/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Archguns = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Archmelees/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Archmelees = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Companions/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Companions = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Sentweps/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Sentweps = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
    });

    firebase.database().ref('/Tiers/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function() {
            $scope.Tiers = $.map(snapshot.val(), function(element) {
                return element;
            });

            $scope.loading = false;
        });
    });

    $scope.categories = ['Primaries', 'Secondaries', 'Melee', /*'Frames',*/ 'Schools', 'Archwings', 'Archguns', 'Archmelees', 'Companions']

});
