
function jugar(){
    do{
        var user = prompt("Para empezar a jugar escribe: \n1 para elegir piedra \n2 para elegir papel  \n3 para elegir tijera");
        var machine = Math.floor(Math.random() * 3) + 1;
        if (user == null){
            //user es null cuando el diálogo es cancelado
            break;
            //Romper el ciclo while, sólo si el usuario cancela el diálogo.
        }
        alert(determinarGanador(user, machine));
        var volver = prompt("¿Quieres volver a jugar? \nEscribe 'si' para volver a jugar o 'no' para salir.");
    }
    while ((volver != null) && (volver.toLowerCase() != "no"));
    //Termina el ciclo si el usuario elige "no" o si cancela el dialogo
}

/**
 * [Determina quien es el ganador en la competencia]
 * @param   {[Entero]} user    [El número corresponde a el objeto elegido por el usuario]
 * @param   {[Entero]} machine [El número corresponde a el objeto elegido por la máquina]
 * @returns {[Texto]} [Ganador del juego]
 */
function determinarGanador(user, machine){
    var resultado = "";

    if (user == machine){
        resultado = "EMPATASTE";
    }
    else if (machine == 1 && user == 2){
        resultado = "¡GANASTE! \nLa compu eligió Piedra";

    }
    else if (machine == 1 && user == 3){
        resultado = "PERDISTE  \nLa compu eligió Piedra";

    }
    else if (machine == 2 && user == 1){
        resultado = "PERDISTE. \nLa compu eligió Papel";

    }
    else if (machine == 2 && user == 3){
        resultado = "¡GANASTE!  \nLa compu eligió Papel";

    }
    else if (machine == 3 && user == 2){
        resultado = "PERDISTE  \nLa compu eligió Tijeras";

    }
    else if (machine == 3 && user == 1){
        resultado = "¡GANASTE! \nLa compu eligió Tijeras";

    }

    return resultado;
}
