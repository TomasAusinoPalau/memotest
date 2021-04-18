let parejas = [];
let parejasUsuario = [];

const $cuadros = document.querySelectorAll('.cuadro');

const colors = ["yellow", "red", "blue", "pink", "purple", "cyan"];
const colorsRepetidos = colors.concat(colors)



function nuevaPartida () {
    distribuirColores();
    manejarEventos();


}

function distribuirColores () {

    // .sort: si devuelve un número negativo el sort es aleatorio.
    const randomColors = colorsRepetidos.sort(function() {
        return 0.5 - Math.random();
    })

    randomColors.forEach((color, index) => {
        $cuadros[index].classList.add(color);
    })




}

function manejarEventos () {
    

}

nuevaPartida();