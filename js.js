
function jugar(){
	do
	{
		var user = parseInt(prompt("Para empezar a jugar escribe: \n1 para elegir piedra \n2 para elegir papel  \n3 para elegir tijera"));
		var machine = Math.floor(Math.random() * 3) + 1;
		if (user == machine){
			alert("EMPATASTE");
		}
		else
		{
			switch (user)
			{
				case 1:
				if(machine == 3)
					alert("¡GANASTE! \nLa compu eligió Tijeras");
				else
					alert("PERDISTE. \nLa compu eligió Papel");
				break;
				case 2:
				if(machine == 1)
					alert("¡GANASTE! \nLa compu eligió Piedra");
				else
					alert("PERDISTE  \nLa compu eligió Tijeras");
				break;
				case 3:
				if (machine == 2)
					alert("¡GANASTE!  \nLa compu eligió Papel");
				else
					alert("PERDISTE  \nLa compu eligió Piedra");
				break;
				default:
				break;
			}
		}
		var volver = prompt("¿Quieres volver a jugar? \nEscribe 'si' para volver a jugar o 'no' para salir.");
	}
	while (volver != "no" && volver != "NO" && volver != "No")
}