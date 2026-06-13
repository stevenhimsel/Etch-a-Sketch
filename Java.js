
const container = document.querySelector("#container");
const feld = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    const quadrat = document.createElement("div");
    quadrat.classList.add("quadrat");

     quadrat.addEventListener("mouseenter", () => {
     quadrat.classList.add("hovered");
     console.log("Ich wurde berührt");
});

    container.appendChild(quadrat);
}




