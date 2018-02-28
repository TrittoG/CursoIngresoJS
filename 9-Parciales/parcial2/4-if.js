/* sin while ni validar
se ingresan dos numeros, si son iguales se concatenan, si el primero es mayor que el segundo, se multiplican
y si el segundo es mas grande, se restansi la multiplicacion da numero par, se muestra el mensaje es par

*/
function Mostrar()
{
	var numUno;
	var numDos;
	var resultado;

	numUno = prompt("ingrese numero");
	numDos = prompt("ingrese numero dos");

	if(numUno == numDos)
	{
		resultado = numUno+numDos;
	}
	else
	{
		numUno = parseInt(numUno);
		numDos = parseInt(numDos);

		if(numUno > numDos)
		{

			resultado = numUno * numDos;
			

			if(resultado % 2 == 0 && resultado != 0)
			{ 
				resultado = resultado +" es par";
			}

		}
		else
		{
			resultado = numUno - numDos;
			
		}
	}//fin del if

	alert(resultado);
	
}

