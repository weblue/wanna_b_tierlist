//TODO better filters
//TODO add more columns
//TODO add on hover information
//TODO Change background

let database;

//Angular
let app = angular.module("tierlist", []);

app.config([
    '$interpolateProvider', function ($interpolateProvider) {
        return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);

// This is used for the unsafe pipe to render HTML from the JSON file.

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.controller("TierListController", function TierListController($scope, $http) {

    $scope.loading = true;
    $http({
        method: 'GET',
        url: './js/thelist.json'
    }).then(function successCallback(response) {
        database = response.data;

        $scope.version = database.version;

        $scope.alerts = $.map(database.alerts, function (element) {
            return element;
        });

        $scope.disclaimers = $.map(database.disclaimers, function (element) {
            return element;
        });

        $scope.Primaries = $.map(database.Primaries, function (element) {
            return element;
        });

        $scope.Secondaries = $.map(database.Secondaries, function (element) {
            return element;
        });

        $scope.Melees = $.map(database.Melees, function (element) {
            return element;
        });

        $scope.Frames = $.map(database.Frames, function (element) {
            return element;
        });

        $scope.Schools = $.map(database.Schools, function (element) {
            return element;
        });

        $scope.Archwings = $.map(database.Archwings, function (element) {
            return element;
        });

        $scope.Archguns = $.map(database.Archguns, function (element) {
            return element;
        });

        $scope.Archmelees = $.map(database.Archmelees, function (element) {
            return element;
        });

        $scope.Companions = $.map(database.Companions, function (element) {
            return element;
        });

        $scope.Sentweps = $.map(database.Sentweps, function (element) {
            return element;
        });

        $scope.Tiers = $.map(database.Tiers, function (element) {
            return element;
        });

        $scope.faq = $.map(database.faq, function (element) {
            return element;
        });

        $('.loadingScreen').addClass("fadeOut");

        setTimeout(function () {
            $scope.$apply(function () {
                $scope.loading = false;
            });
        }, 2000);
    });

    $scope.categories = ['Primaries', 'Secondaries', 'Melee', 'Frames', /*'Schools',*/ 'Archwings', 'Archguns', 'Archmelees', 'Companions'];

});
