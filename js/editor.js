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

            $scope.disclaimers = db.disclaimers;

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
        let json = angular.toJson(db, 2);
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
        db.alerts[newAlertName] =
            {
                class: newAlertClass,
                text: newAlertText
            };

        alert('Added alert: ' + newAlertName);
    };

    $scope.deleteAlert = function (toDelete) {
        Object.keys(db.alerts).forEach(
            (element) => {
                if (db.alerts[element].text === toDelete.text)
                    delete db.alerts[element];
            });
    };

    $scope.addDisclaimer = function (newDisclaimerName, newDisclaimerText) {
        db.disclaimers[newDisclaimerName] =
            {
                text: newDisclaimerText
            };

        alert('Added disclaimer: ' + newDisclaimerName);
    };

    $scope.deleteDisclaimer = function (toDelete) {
        Object.keys(db.disclaimers).forEach(
            (element) => {
                if (db.disclaimers[element].text === toDelete.text)
                    delete db.disclaimers[element];
            });
    };

    $scope.deletePrimary = function (toDelete) {
        Object.keys(db.Primaries).forEach(
            (element) => {
                if (db.Primaries[element].name === toDelete.name)
                    delete db.Primaries[element];
            });
    };

    $scope.deleteSecondary = function (toDelete) {
        Object.keys(db.Secondaries).forEach(
            (element) => {
                if (db.Secondaries[element].name === toDelete.name)
                    delete db.Secondaries[element];
            });
    };

    $scope.deleteMelee = function (toDelete) {
        Object.keys(db.Melees).forEach(
            (element) => {
                if (db.Melees[element].name === toDelete.name)
                    delete db.Melees[element];
            });
    };

    $scope.deleteSchool = function (toDelete) {
        Object.keys(db.Schools).forEach(
            (element) => {
                if (db.Schools[element].name === toDelete.name)
                    delete db.Schools[element];
            });
    };

    $scope.deleteArchwing = function (toDelete) {
        Object.keys(db.Archwings).forEach(
            (element) => {
                if (db.Archwings[element].name === toDelete.name)
                    delete db.Archwings[element];
            });
    };

    $scope.deleteArchgun = function (toDelete) {
        Object.keys(db.Archguns).forEach(
            (element) => {
                if (db.Archguns[element].name === toDelete.name)
                    delete db.Archguns[element];
            });
    };

    $scope.deleteArchmelee = function (toDelete) {
        Object.keys(db.Archmelees).forEach(
            (element) => {
                if (db.Archmelees[element].name === toDelete.name)
                    delete db.Archmelees[element];
            });
    };

    $scope.deleteCompanion = function (toDelete) {
        Object.keys(db.Companions).forEach(
            (element) => {
                if (db.Companions[element].name === toDelete.name)
                    delete db.Companions[element];
            });
    };

    $scope.addPrimary = function (newPrimaryName, newPrimaryMr, newPrimaryBase, newPrimaryCategory, newPrimaryDmg,
                                  newPrimaryNotes, newPrimaryRank, newPrimaryTier, newPrimaryType) {
        let urlName = newPrimaryName.replace(/ /g, "_");

        db.Primaries[newPrimaryName] =
            {
                name: newPrimaryName,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                mr: Number(newPrimaryMr),
                base: newPrimaryBase,
                category: newPrimaryCategory,
                dmg: newPrimaryDmg,
                notes: newPrimaryNotes,
                rank: Number(newPrimaryRank),
                tier: newPrimaryTier,
                type: newPrimaryType
            };

        alert('Added primary: ' + newPrimaryName);
        $scope.reorder(db.Primaries);
    };

    $scope.addSecondary = function (newSecondaryName, newSecondaryMr, newSecondaryBase, newSecondaryDmg,
                                    newSecondaryNotes, newSecondaryRank, newSecondaryTier, newSecondaryType) {
        let urlName = newSecondaryName.replace(/ /g, "_");

        db.Secondaries[newSecondaryName] =
            {
                name: newSecondaryName,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                mr: Number( newSecondaryMr),
                base: newSecondaryBase,
                dmg: newSecondaryDmg,
                notes: newSecondaryNotes,
                rank: Number(newSecondaryRank),
                tier: newSecondaryTier,
                type: newSecondaryType
            };

        alert('Added secondary: ' + newSecondaryName);
        $scope.reorder(db.Secondaries);
    };

    $scope.addMelee = function (newMeleeName, newMeleeMr, newMeleeBase, newMeleeDmg, newMeleeCombo, newMeleeStance,
                                newMeleeStancenotes, newMeleeNotes, newMeleeRank, newMeleeTier, newMeleeType) {
        let urlName = newMeleeName.replace(/ /g, "_");

        db.Melees[newMeleeName] =
            {
                name: newMeleeName,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                mr: Number(newMeleeMr),
                combo: newMeleeCombo,
                stance: newMeleeStance,
                stancenotes: newMeleeStancenotes,
                base: newMeleeBase,
                dmg: newMeleeDmg,
                notes: newMeleeNotes,
                rank: Number(newMeleeRank),
                tier: newMeleeTier,
                type: newMeleeType
            };

        alert('Added melee: ' + newMeleeName);
        $scope.reorder(db.Melees);
    };

    $scope.addSchool = function (newSchoolName, newSchoolFrame, newSchoolNotes, newSchoolRank, newSchoolTier, newSchoolOp) {
        let urlName = newSchoolName.replace(/ /g, "_");

        db.Schools[newSchoolName] =
            {
                name: newSchoolName,
                frame: newSchoolFrame,
                url: 'http://warframe.wikia.com/wiki/Focus',
                op: newSchoolOp,
                notes: newSchoolNotes,
                rank: Number(newSchoolRank),
                tier: newSchoolTier
            };

        alert('Added school: ' + newSchoolName);
        $scope.reorder(db.Schools);
    };

    $scope.addArchwing = function (newArchwingName, newArchwingUse, newArchwingNotes, newArchwingRank, newArchwingTier) {
        let urlName = newArchwingName.replace(/ /g, "_");

        db.Archwings[newArchwingName] =
            {
                name: newArchwingName,
                use: newArchwingUse,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                notes: newArchwingNotes,
                rank: Number(newArchwingRank),
                tier: newArchwingTier
            };

        alert('Added archwing: ' + newArchwingName);
        $scope.reorder(db.Archwings);
    };

    $scope.addArchgun = function (newArchgunName, newArchgunUse, newArchgunBase, newArchgunFiring, newArchgunNotes, newArchgunRank, newArchgunTier) {
        let urlName = newArchgunName.replace(/ /g, "_");

        db.Archguns[newArchgunName] =
            {
                name: newArchgunName,
                use: newArchgunUse,
                base: newArchgunBase,
                firing: newArchgunFiring,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                notes: newArchgunNotes,
                rank: Number(newArchgunRank),
                tier: newArchgunTier
            };

        alert('Added archgun: ' + newArchgunName);
        $scope.reorder(db.Archguns);
    };

    $scope.addArchmelee = function (newArchmeleeName, newArchmeleeUse, newArchmeleeNotes, newArchmeleeRank, newArchmeleeTier) {
        let urlName = newArchmeleeName.replace(/ /g, "_");

        db.Archmelees[newArchmeleeName] =
            {
                name: newArchmeleeName,
                use: newArchmeleeUse,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                notes: newArchmeleeNotes,
                rank: Number(newArchmeleeRank),
                tier: newArchmeleeTier
            };

        alert('Added archmelee: ' + newArchmeleeName);
        $scope.reorder(db.Archmelees);
    };

    $scope.addCompanion = function (newCompanionName, newCompanionBase, newCompanionAbilities, newCompanionNotes,
                                    newCompanionCategory, newCompanionRank, newCompanionTier) {
        let urlName = newCompanionName.replace(/ /g, "_");

        db.Companions[newCompanionName] =
            {
                name: newCompanionName,
                base: newCompanionBase,
                abilities: newCompanionAbilities,
                url: 'http://warframe.wikia.com/wiki/' + urlName,
                notes: newCompanionNotes,
                category: newCompanionCategory,
                rank: Number(newCompanionRank),
                tier: newCompanionTier
            };

        alert('Added companion: ' + newCompanionName);
        $scope.reorder(db.Companions);
    };

});
