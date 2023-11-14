function loadTable() {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) => res.json().then((data) => {
        insertTable(data);
    }))

}

function insertTable(data) {
    console.log("data", data);
    const element = document.getElementById("tabelle");

    let output = '';
    data.forEach(team => {
        output += ' <div class="flex items-center p-2 rounded-xl border border-black border-solid mb-2">';
        output += "<div>" + team.draw + "</div>";
        output += ' <div> <img widht="20px" src="' + team.teamIconUrl + '"/></div>';
        output += " <div>" + team.teamName + "</div>";
        output += ' <div style= "text-right;">' + team.points + '</div>';
        output += '</div>';
    });

    console.log("output", output);
    element.innerHTML = output;


}


const data = loadTable();