var user = prompt("Para empezar a jugar escribe 1 para elegir piedra, 2 para elegir papel o 3 para elegir tijera.");
var machine = Math.floor(Math.random() * 3) + 1;


if (user == machine){
	alert("Empataste");
}
else if (machine == 1 && user == 2){
	alert("La compu eligió Piedra, Ganaste!");
}
else if (machine == 1 && user == 3){
	alert("La compu eligió Piedra, Perdiste!");
}
else if (machine == 2 && user == 1){
	alert("La compu eligió Papel, Perdiste.");
} 
else if (machine == 2 && user == 3){
	alert("La compu eligió Papel, Ganaste!");
}
else if (machine == 3 && user == 2){
	alert("La compu eligió Tijeras, Perdiste.");
}
else if (machine == 3 && user == 1){
	alert("La compu eligió Tijeras, Ganaste!");
}
