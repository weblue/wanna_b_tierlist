let db;

//Angular
let app = angular.module("editor", []);

app.config([
    '$interpolateProvider', function ($interpolateProvider) {
        return $interpolateProvider.startSymbol('{(').endSymbol(')}');
    }
]);

app.controller("EditorController", function EditorController($scope, $http) {

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
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    };

    $scope.reorderButton = function () {
        let array = db[$scope.selectedCategory];
        let index = Object.keys(array);

        let cur;
        for (let i = 0; i < index.length; i++) {
            let obj = array[index[i]];
            for (let j = 0; j < index.length; j++) {
                if (obj.rank === array[index[j]].rank && obj !== array[index[j]]) {
                    console.log("hit");
                    if (obj.name < array[index[j]].name) {
                        array[index[j]].rank++;
                        cur = array[index[j]].rank;
                    } else {
                        obj.rank++;
                        cur = obj.rank;
                    }

                    for (let k = 0; k < index.length; k++) {
                        if (array[index[k]].rank > cur)
                            array[index[k]].rank++;
                    }
                }
            }
        }


    };

    $scope.reorder = function (array) {
        let index = Object.keys(array);

        let cur;
        for (let i = 0; i < index.length; i++) {
            let obj = array[index[i]];
            for (let j = 0; j < index.length; j++) {
                if (obj.rank === array[index[j]].rank && obj !== array[index[j]]) {
                    console.log("hit");
                    if (obj.name < array[index[j]].name) {
                        array[index[j]].rank++;
                        cur = array[index[j]].rank;
                    } else {
                        obj.rank++;
                        cur = obj.rank;
                    }

                    for (let k = 0; k < index.length; k++) {
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

    $scope.deletePrimary = function (toDelete) {
        Object.keys($scope.Primaries).forEach(
            (element) => {
                if ($scope.Primaries[element].name === toDelete.name)
                    delete $scope.Primaries[element];
            });
    };

    $scope.deleteSecondary = function (toDelete) {
        Object.keys($scope.Secondaries).forEach(
            (element) => {
                if ($scope.Secondaries[element].name === toDelete.name)
                    delete $scope.Secondaries[element];
            });
    };

    $scope.deleteMelee = function (toDelete) {
        Object.keys($scope.Melees).forEach(
            (element) => {
                if ($scope.Melees[element].name === toDelete.name)
                    delete $scope.Melees[element];
            });
    };

    $scope.deleteSchool = function (toDelete) {
        Object.keys($scope.Schools).forEach(
            (element) => {
                if ($scope.Schools[element].name === toDelete.name)
                    delete $scope.Schools[element];
            });
    };

    $scope.deleteArchwing = function (toDelete) {
        Object.keys($scope.Archwings).forEach(
            (element) => {
                if ($scope.Archwings[element].name === toDelete.name)
                    delete $scope.Archwings[element];
            });
    };

    $scope.deleteArchgun = function (toDelete) {
        Object.keys($scope.Archguns).forEach(
            (element) => {
                if ($scope.Archguns[element].name === toDelete.name)
                    delete $scope.Archguns[element];
            });
    };

    $scope.deleteArchmelee = function (toDelete) {
        Object.keys($scope.Archmelees).forEach(
            (element) => {
                if ($scope.Archmelees[element].name === toDelete.name)
                    delete $scope.Archmelees[element];
            });
    };

    $scope.deleteCompanion = function (toDelete) {
        Object.keys($scope.Companions).forEach(
            (element) => {
                if ($scope.Companions[element].name === toDelete.name)
                    delete $scope.Companions[element];
            });
    };

    $scope.addPrimary = function (newPrimaryName, newPrimaryMr, newPrimaryBase, newPrimaryCategory, newPrimaryDmg,
                                  newPrimaryNotes, newPrimaryRank, newPrimaryTier, newPrimaryType) {
        let urlName = newPrimaryName.replace(/ /g, "_");

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

    $scope.addSecondary = function (newSecondaryName, newSecondaryMr, newSecondaryBase, newSecondaryDmg,
                                    newSecondaryNotes, newSecondaryRank, newSecondaryTier, newSecondaryType) {
        let urlName = newSecondaryName.replace(/ /g, "_");

        $scope.Secondaries[newSecondaryName] =
            {
                name: newSecondaryName,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                mr: newSecondaryMr,
                base: newSecondaryBase,
                dmg: newSecondaryDmg,
                notes: newSecondaryNotes,
                rank: newSecondaryRank,
                tier: newSecondaryTier,
                type: newSecondaryType
            };

        $scope.reorder($scope.Secondaries);
    };

    $scope.addMelee = function (newMeleeName, newMeleeMr, newMeleeBase, newMeleeDmg, newMeleeCombo, newMeleeStance,
                                newMeleeStancenotes, newMeleeNotes, newMeleeRank, newMeleeTier, newMeleeType) {
        let urlName = newMeleeName.replace(/ /g, "_");

        $scope.Melees[newMeleeName] =
            {
                name: newMeleeName,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                mr: newMeleeMr,
                combo: newMeleeCombo,
                stance: newMeleeStance,
                stancenotes: newMeleeStancenotes,
                base: newMeleeBase,
                dmg: newMeleeDmg,
                notes: newMeleeNotes,
                rank: newMeleeRank,
                tier: newMeleeTier,
                type: newMeleeType
            };

        $scope.reorder($scope.Melees);
    };

    $scope.addSchool = function (newSchoolName, newSchoolFrame, newSchoolNotes, newSchoolRank, newSchoolTier, newSchoolOp) {
        let urlName = newSchoolName.replace(/ /g, "_");

        $scope.Schools[newSchoolName] =
            {
                name: newSchoolName,
                frame: newSchoolFrame,
                url: 'http://warframe.wikia.com/wiki/Focus',
                op: newSchoolOp,
                notes: newSchoolNotes,
                rank: newSchoolRank,
                tier: newSchoolTier
            };

        $scope.reorder($scope.Schools);
    };

    $scope.addArchwing = function (newArchwingName, newArchwingUse, newArchwingNotes, newArchwingRank, newArchwingTier) {
        let urlName = newArchwingName.replace(/ /g, "_");

        $scope.Archwings[newArchwingName] =
            {
                name: newArchwingName,
                use: newArchwingUse,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                notes: newArchwingNotes,
                rank: newArchwingRank,
                tier: newArchwingTier
            };

        $scope.reorder($scope.Archwings);
    };

    $scope.addArchgun = function (newArchgunName, newArchgunUse, newArchgunBase, newArchgunFiring, newArchgunNotes, newArchgunRank, newArchgunTier) {
        let urlName = newArchgunName.replace(/ /g, "_");

        $scope.Archguns[newArchgunName] =
            {
                name: newArchgunName,
                use: newArchgunUse,
                base: newArchgunBase,
                firing: newArchgunFiring,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                notes: newArchgunNotes,
                rank: newArchgunRank,
                tier: newArchgunTier
            };

        $scope.reorder($scope.Archguns);
    };

    $scope.addArchmelee = function (newArchmeleeName, newArchmeleeUse, newArchmeleeNotes, newArchmeleeRank, newArchmeleeTier) {
        let urlName = newArchmeleeName.replace(/ /g, "_");

        $scope.Archmelees[newArchmeleeName] =
            {
                name: newArchmeleeName,
                use: newArchmeleeUse,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                notes: newArchmeleeNotes,
                rank: newArchmeleeRank,
                tier: newArchmeleeTier
            };

        $scope.reorder($scope.Archmelees);
    };

    $scope.addCompanion = function (newCompanionName, newCompanionBase, newCompanionAbilities, newCompanionNotes,
                                    newCompanionCategory, newCompanionRank, newCompanionTier) {
        let urlName = newCompanionName.replace(/ /g, "_");

        $scope.Companions[newCompanionName] =
            {
                name: newCompanionName,
                base: newCompanionBase,
                abilities: newCompanionAbilities,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                notes: newCompanionNotes,
                category: newCompanionCategory,
                rank: newCompanionRank,
                tier: newCompanionTier
            };

        $scope.reorder($scope.Companions);
    };

});
