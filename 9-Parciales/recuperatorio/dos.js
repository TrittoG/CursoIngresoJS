function Mostrar()
{
	var importe;
	var importeFinal;
	

	importe = prompt("ingrese un importe");

	importeFinal = importe * 0.75;

	document.getElementById('importeFinal').value = importeFinal;
  
}
