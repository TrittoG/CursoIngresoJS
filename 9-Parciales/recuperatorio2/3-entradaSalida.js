//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var alambre;

	ancho = document.getElementById('ancho').value;
	largo = document.getElementById('largo').value;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = largo * ancho;

	alambre = perimetro * 6;

	alert("se necesitan : " +alambre);
	
}

