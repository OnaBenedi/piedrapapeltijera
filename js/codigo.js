function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra 🥌"
    } else if(jugada == 2) { 
        resultado = "Papel 📋"
    } else if(jugada == 3) { 
        resultado = "Tijera ✂"
    } else { 
        resultado = "Mal elegido"
    } return resultado
}
function combate() {
    if(pc == jugador) {
        resultadocombate = ("Empate")
    } else if(jugador == 1 && pc == 3) {
        resultadocombate = ("Ganaste")
    } else if(jugador == 2 && pc == 1) {
        resultadocombate = ("Ganaste")
    } else if(jugador == 3 && pc == 2) {
        resultadocombate = ("Ganaste")
    } else {
        resultadocombate = ("Perdiste")
    }
    alert(resultadocombate)
}
// 1 piedra, 2 papel, 3 tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    //alert("Elegiste " + jugador)
    alert("PC elige: " + eleccion (pc))
    alert("Tú eliges: " + eleccion(jugador))

    combate()
    if(resultadocombate == "Ganaste") {
        triunfos = triunfos + 1
    } else if(resultadocombate == "Perdiste") {
        perdidas = perdidas + 1
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
