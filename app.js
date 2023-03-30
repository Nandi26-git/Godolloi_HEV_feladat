const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");

const menetidoBtn = document.querySelector("button");

menetidoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (select1.value != select2.value) {
        if (select1.value < select2.value) {
            alert(`Menetidő ${select2.value - select1.value} perc!`)
        } else if (select1.value > select2.value) {
            alert(`Menetidő ${select1.value - select2.value} perc!`)
        }
    } else {
        alert("Hiba: Azonos megállókat választott ki!")
    }
})