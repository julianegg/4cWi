function loadTable() {
    // zeige animation warten
    document.getElementById("loadingIcon").style.display = "none";
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) => res.json().then((data) => {
        document.getElementById("loadingIcon").style.display = "block";
        insertTable(data);
        // stop anzeige animation warten
    }))


}

function insertTable(data) {
    console.log("data", data);
    const element = document.getElementById("tabelle");

    let output = '';
    data.forEach((team, index) => {
        output += ' <div class="grid grid-cols-[20px_40px_auto_40px] p-2 rounded-xl border border-black border-solid mb-2 hover:bg-slate-400">';
        output += "<div>" + (index + 1) + "</div>";
        output += ' <div class="w-5"> <img src="' + team.teamIconUrl + '"/></div>';
        output += " <div>" + team.teamName + "</div>";
        output += ' <div>' + team.points + '</div>';
        output += '</div>';
    });

    console.log("output", output);
    element.innerHTML = output;


}


document.addEventListener("DOMContentLoaded", function() {
    loadTable();
});