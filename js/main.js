//TODO:
//Admin panel
//User Commenting
//Weapon stats on hover
//Suggested BUilds
//Arcanes, AMPs, Zaws
//fixing tables

//Categories
//Rank, MR Req, Notes, Name, suggested builds
//Revise:
//CC Mechanic, Damage Type, Favors, base/event, role in group, mission type


// Regular ol' javascript

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

function sortTable(tablename, n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    printname = tablename + '';
    table = document.getElementById(tablename);
    switching = true;
    dir = "asc";
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        // rows = table.getElementsByTagName("TR");
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

//Angular
let app = angular.module("tierlist", []);

app.controller("TierListController", function TierListController ($scope) {

    firebase.database().ref('/Primaries/').once('value').then(function (snapshot) {
        console.log(snapshot.val());

        $scope.$evalAsync(function () {
            $scope.Primaries = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
        console.log($scope.Primaries);
    });

    firebase.database().ref('/Sentweps/').once('value').then(function (snapshot) {
        console.log(snapshot.val());

        $scope.$evalAsync(function () {
            $scope.Sentweps = $.map(snapshot.val(), function (element) {
                return element;
            });
        });
        console.log($scope.Sentweps);
    });

    firebase.database().ref('/Tiers/').once('value').then(function (snapshot) {
        console.log(snapshot.val());

        $scope.$evalAsync(function() {
            $scope.Tiers = $.map(snapshot.val(), function(element) {
                return element;
            });
        });
        console.log($scope.Tiers);
    });

    $scope.categories = ['Primaries', 'Secondaries', 'Melee', 'Frames', 'Schools', 'Archwings', 'Archguns', 'Archmelees', 'Companions']

});

