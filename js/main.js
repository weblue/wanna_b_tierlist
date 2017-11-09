//TODO:
//1.0
//Styling
//Frames
//Clean up TODO
    //Saryn
    //Zephyr
    //Frame builds
    //Melee Viable
    //Secondary Types
    //Read since 20.1.2 Octavia

//1.1
//colors on change using ng-style
//User Commenting through Github issues
//Arcanes, AMPs, Zaws
//Melee Stances
//2.0
//Admin panel
//Weapon stats on hover
//3.0
//Suggested Builds (Blog)

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

    firebase.database().ref('/Primaries/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Primaries = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Primaries);
        });
    });

    firebase.database().ref('/Secondaries/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Secondaries = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Secondaries);
        });
    });

    firebase.database().ref('/Melees/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Melees = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Melees);
        });
    });

    firebase.database().ref('/Frames/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Frames = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Frames);
        });
    });

    firebase.database().ref('/Schools/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Schools = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Schools);
        });
    });

    firebase.database().ref('/Archwings/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Archwings = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Archwings);
        });
    });

    firebase.database().ref('/Archguns/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Archguns = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Archguns);
        });
    });

    firebase.database().ref('/Archmelees/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Archmelees = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Archmelees);
        });
    });

    firebase.database().ref('/Companions/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Companions = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Companions);
        });
    });

    firebase.database().ref('/Sentweps/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function () {
            $scope.Sentweps = $.map(snapshot.val(), function (element) {
                return element;
            });
            console.log($scope.Sentweps);
        });
    });

    firebase.database().ref('/Tiers/').once('value').then(function (snapshot) {
        $scope.$evalAsync(function() {
            $scope.Tiers = $.map(snapshot.val(), function(element) {
                return element;
            });
            console.log($scope.Tiers);
        });
    });

    $scope.categories = ['Primaries', 'Secondaries', 'Melee', 'Frames', 'Schools', 'Archwings', 'Archguns', 'Archmelees', 'Companions']

});
