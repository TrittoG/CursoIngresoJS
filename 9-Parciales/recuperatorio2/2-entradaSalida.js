//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeFinal;

	importe = prompt("ingrese un importe: ");
	importe = parseInt(importe);

	importeFinal = importe * 1.21;

	document.getElementById('importe').value = importeFinal;
}

