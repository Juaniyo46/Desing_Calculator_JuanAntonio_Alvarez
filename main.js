

window.onload = function(){
	textoPantalla = document.getElementById("pantalla");
}

var num1 = "0";
var mostrar = 1;
var coma = 0;
var opera;



function darNumero(numero) {
	if (num1 == "0" && mostrar == 1) {
		num1 == numero;
	} else {
		pantalla.innerHTML+=numero;
		num1 += numero;
	}

	pulsado();
}