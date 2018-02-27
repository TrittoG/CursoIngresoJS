//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

	var numUno;
	var numDos;
	var suma;
	

	numUno = prompt("ingrese un numero");
	numDos = prompt("ingrese otro numero");

	numUno = parseInt(numUno);
	numDos = parseInt(numDos);

	if(numUno == numDos)
	{
		suma= numUno * numDos;
	}
	else
	{
		if(numUno > numDos)
		{
			suma = numUno - numDos;
		}
		else
		{
			suma = numUno + numDos;
		}
	}

	document.write("<br>el resultado es: " +suma);
	
}

