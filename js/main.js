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

    $scope.version = database.version;

    $scope.alerts = $.map(database.alerts, function(element) {
        return element;
    });

    $scope.Primaries = $.map(database.Primaries, function(element) {
        return element;
    });

    $scope.Secondaries = $.map(database.Secondaries, function(element) {
        return element;
    });

    $scope.Melees = $.map(database.Melees, function(element) {
        return element;
    });

    $scope.Frames = $.map(database.Frames, function(element) {
        return element;
    });

    $scope.Schools = $.map(database.Schools, function(element) {
        return element;
    });

    $scope.Archwings = $.map(database.Archwings, function(element) {
        return element;
    });

    $scope.Archguns = $.map(database.Archguns, function(element) {
        return element;
    });

    $scope.Archmelees = $.map(database.Archmelees, function(element) {
        return element;
    });

    $scope.Companions = $.map(database.Companions, function(element) {
        return element;
    });

    $scope.Sentweps = $.map(database.Sentweps, function(element) {
        return element;
    });

    $scope.Tiers = $.map(database.Tiers, function(element) {
        return element;
    });

    $scope.faq = $.map(database.faq, function(element) {
        return element;
    });

    $('.loadingScreen').addClass("fadeOut");

    setTimeout(function () {
        $scope.$apply(function(){
            $scope.loading = false;
        });
    }, 2000);

    $scope.categories = ['Primaries', 'Secondaries', 'Melee', /*'Frames',*/ 'Schools', 'Archwings', 'Archguns', 'Archmelees', 'Companions'];

});
