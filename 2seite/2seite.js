function loadTable() {
    document.getElementById("loadingIcon").style.display = "none";
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023/1").then((res) => res.json().then((data) => {
        document.getElementById("loadingIcon").style.display = "block";
        insertTable(data);
    }))

}

function insertTable(data) {
    console.log("data", data);
    const element = document.getElementById("box");

    let output = '';
    data.forEach((match, index) => {
        output += '<div class="bg-white border-solid border-2 border-black mt-4 flex justify-between p-2 hover:bg-red-600 rounded-lg"">';
        output += '<div class="flex-1 text-center">' + match.team1.teamName + '</div>';
        output += '<div class="flex-1 text-center">' + match.matchResults[1].pointsTeam1 + ' : ' + match.matchResults[1].pointsTeam2 + '</div>';
        output += '<div class="flex-1 text-center">' + match.team2.teamName + '</div>';
        output += '</div>';
    });

    console.log("output", output);
    element.innerHTML = output;


}



document.addEventListener("DOMContentLoaded", function() {
    loadTable();
});