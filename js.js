
function jugar(){
	do{
		var user = prompt("Para empezar a jugar escribe: \n1 para elegir piedra \n2 para elegir papel  \n3 para elegir tijera");
		var machine = Math.floor(Math.random() * 3) + 1;
		if (user == machine){
			alert("EMPATASTE");
		}
		else if (machine == 1 && user == 2){
			alert("¡GANASTE! \nLa compu eligió Piedra");
				
		}
		else if (machine == 1 && user == 3){
			alert("PERDISTE  \nLa compu eligió Piedra");
			
		}
		else if (machine == 2 && user == 1){
			alert("PERDISTE. \nLa compu eligió Papel");
			
		} 
		else if (machine == 2 && user == 3){
			alert("¡GANASTE!  \nLa compu eligió Papel");
			
		}
		else if (machine == 3 && user == 2){
			alert("PERDISTE  \nLa compu eligió Tijeras");
			
		}
		else if (machine == 3 && user == 1){
			alert("¡GANASTE! \nLa compu eligió Tijeras");
			
		}
		var volver = prompt("¿Quieres volver a jugar? \nEscribe 'si' para volver a jugar o 'no' para salir.");
	}
	while (volver != "no" && volver != "NO" && volver != "No")
}
