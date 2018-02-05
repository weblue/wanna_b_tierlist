let db;

//Angular
let app = angular.module("editor", []);

app.config([
    '$interpolateProvider', function ($interpolateProvider) {
        return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);

app.controller("EditorController", function EditorController($scope, $http, $location) {

    $http.get('./js/thelist.json').then(
        function (res) {
            db = res.data;
            console.log(res.data);

            $scope.version = db.version;

            $scope.alerts = db.alerts;

            $scope.Primaries = $.map(db.Primaries, function (element) {
                return element;
            });

            $scope.Secondaries = $.map(db.Secondaries, function (element) {
                return element;
            });

            $scope.Melees = $.map(db.Melees, function (element) {
                return element;
            });

            $scope.Frames = $.map(db.Frames, function (element) {
                return element;
            });

            $scope.Schools = $.map(db.Schools, function (element) {
                return element;
            });

            $scope.Archwings = $.map(db.Archwings, function (element) {
                return element;
            });

            $scope.Archguns = $.map(db.Archguns, function (element) {
                return element;
            });

            $scope.Archmelees = $.map(db.Archmelees, function (element) {
                return element;
            });

            $scope.Companions = $.map(db.Companions, function (element) {
                return element;
            });

            $scope.Sentweps = $.map(db.Sentweps, function (element) {
                return element;
            });
        });

    $scope.categories = ['Primaries', 'Secondaries', 'Melees', /*'Frames',*/ 'Schools', 'Archwings', 'Archguns', 'Archmelees', 'Companions'];

    $scope.arrays = [$scope.Primaries , $scope.Secondaries, $scope.Melee, $scope.Schools, $scope.Archwings, $scope.Archguns, $scope.Archmelees, $scope.Companions]

    $scope.download = function () {
        let json = JSON.stringify(db, null, 4);
        let blob = new Blob([json], {type: "application/json"});

        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(blob, "thelist.json");
        else { // Others
            let a = document.createElement("a"),
                url = URL.createObjectURL(blob);
            a.href = url;
            a.download = "thelist.json";
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    };

    $scope.reorderButton = function() {
        let array = db[$scope.selectedCategory];
        let index = Object.keys(array);

        let cur;
        for(let i = 0; i < index.length; i++) {
            let obj = array[index[i]];
            for(let j = 0; j < index.length; j++) {
                if (obj.rank === array[index[j]].rank && obj !== array[index[j]]) {
                    console.log("hit");
                    if (obj.name < array[index[j]].name) {
                        array[index[j]].rank++;
                        cur = array[index[j]].rank;
                    } else {
                        obj.rank++;
                        cur = obj.rank;
                    }

                    for(let k = 0; k < index.length; k++) {
                        if (array[index[k]].rank > cur)
                            array[index[k]].rank++;
                    }
                }
            }
        }


    };

    $scope.reorder = function(array) {
        let index = Object.keys(array);

        let cur;
        for(let i = 0; i < index.length; i++) {
            let obj = array[index[i]];
            for(let j = 0; j < index.length; j++) {
                if (obj.rank === array[index[j]].rank && obj !== array[index[j]]) {
                    console.log("hit");
                    if (obj.name < array[index[j]].name) {
                        array[index[j]].rank++;
                        cur = array[index[j]].rank;
                    } else {
                        obj.rank++;
                        cur = obj.rank;
                    }

                    for(let k = 0; k < index.length; k++) {
                        if (array[index[k]].rank > cur)
                            array[index[k]].rank++;
                    }
                }
            }
        }
    };

    $scope.addAlert = function (newAlertName, newAlertClass, newAlertText) {
        $scope.alerts[newAlertName] =
            {
                class: newAlertClass,
                text: newAlertText
            };
    };

    $scope.deleteAlert = function (toDelete) {
        Object.keys($scope.alerts).forEach(
            (element) => {
                if ($scope.alerts[element].text === toDelete.text)
                    delete $scope.alerts[element];
            });
    };

    $scope.addPrimary = function (newPrimaryName, newPrimaryMr, newPrimaryBase, newPrimaryCategory, newPrimaryDmg,
                                  newPrimaryNotes, newPrimaryRank, newPrimaryTier, newPrimaryType) {
        let urlName = newPrimaryName.replace(/ /g,"_");

        $scope.Primaries[newPrimaryName] =
            {
                name: newPrimaryName,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                mr: newPrimaryMr,
                base: newPrimaryBase,
                category: newPrimaryCategory,
                dmg: newPrimaryDmg,
                notes: newPrimaryNotes,
                rank: newPrimaryRank,
                tier: newPrimaryTier,
                type: newPrimaryType
            };

        $scope.reorder($scope.Primaries);
    };

    $scope.deletePrimary = function (toDelete) {
        Object.keys($scope.Primaries).forEach(
            (element) => {
                if ($scope.Primaries[element].name === toDelete.name)
                    delete $scope.Primaries[element];
            });
    };


});
