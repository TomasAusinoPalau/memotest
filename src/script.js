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
        parejas.push($cuadros[index])
    })




}

function manejarEventos () {
    
    desbloquearInputUsuario();    

}

function desbloquearInputUsuario() {

    let cuadradosElegidos = []

    document.querySelectorAll(".cuadro").forEach(function ($cuadro) {


        $cuadro.onclick = (e) => {
            const $cuadrado = e.target;
            console.log($cuadrado);

            iluminarCuadrado($cuadrado)

            cuadradosElegidos.push($cuadrado)

            if (cuadradosElegidos.length === 2) {
                if (cuadradosElegidos[0].className === cuadradosElegidos[1].className) {
                    eliminarCuadrado(cuadradosElegidos[0]);
                    eliminarCuadrado(cuadradosElegidos[1]);

                    parejasUsuario.push(cuadradosElegidos[0]);
                    parejasUsuario.push(cuadradosElegidos[1]);

                    desbloquearInputUsuario()
                } else {
                    ocultarCuadrado(cuadradosElegidos[0])
                    ocultarCuadrado(cuadradosElegidos[1])

                    desbloquearInputUsuario()
                }
            } else {

            }
        }
    })

}

function eliminarCuadrado($cuadrado) {
    setTimeout(function() {
        $cuadrado.parentElement.classList.add('completo');
        $cuadrado.remove();
        evaluarFinDeJuego();
      }, 500);
} 

function ocultarCuadrado($cuadrado) {
    setTimeout(function() {
        $cuadrado.style.opacity = "0";
    }, 500)
}

function iluminarCuadrado($cuadrado) {
    $cuadrado.style.opacity = "1";
}

function evaluarFinDeJuego() {
    if (parejas.length === parejasUsuario.length) {
        console.log("ganaste");
    }
}

nuevaPartida();