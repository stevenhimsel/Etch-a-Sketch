
const container = document.querySelector("#container");
const feld = document.getElementById("container");
const restartBtn = document.querySelector("#restartBtn");
const changeBtn = document.getElementById("changeBtn");



changeBtn.addEventListener("click", function() {
    const question = Number(prompt("Wie viele Quadrate möchtest du?"));
    if (question <= 100) {
        container.innerHTML = "";
        createGrid(question);
    } else if (question > 100) {
        alert("Error!");
    } else {
        alert("Gib eine Zahl zwischen 1 und 100 ein!");
    }

    

    
});

document.getElementById("restartBtn").addEventListener("click", () => {
    window.location.reload();
});

function createGrid(zahl) {
    let ergebnis = zahl * zahl;
for (let i = 0; i < ergebnis; i++) {
    const quadrat = document.createElement("div");
    quadrat.classList.add("quadrat");
    quadrat.style.width = 100 / zahl + "%";
    quadrat.style.height = 100 / zahl + "%";

     quadrat.addEventListener("mouseenter", () => {
     quadrat.classList.add("hovered");
     console.log("Ich wurde berührt");
});

    container.appendChild(quadrat);
}
}

createGrid(16);



