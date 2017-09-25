let app = angular.module("tierlist", []);

app.controller("controller", function($scope) {
    $scope.Primaries = [
        { rank: 1, name:"Tonkor", damage:"Critical", cc:"not blast", mr:"110", notes: "Massive AOE and single target hitter", event: "no", builds:"idk a link"},
        { rank: 2, name:"Zarr", damage:"Critical", cc:"blast", mr:"110", notes: "Fair bonkor", event: "no", builds:"idk a link"},
    ]

    $scope.categories = ['Primaries', 'Secondaries', 'Melee', 'Frames', 'Schools', 'Archwings', 'Archguns', 'Archmelee', 'Companions', 'Sentinel Weapons']

});

// JQuery

let printname = '';

// Regular ol' javascript

function sortTable(tablename, n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    printname = tablename + '';
    table = document.getElementById(tablename);
    switching = true;
    dir = "asc";
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
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
                    shouldSwitch= true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
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
            switchcount ++;
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
