//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var respuesta = "";
	var contPar = 0;
	var contadorNum = 0;
	var promedio;
	var contador = 0;
	var maximo;
	var minimo;

	while(respuesta != "no")
	{
		contador++;

		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		while(numero < 0 || isNaN(numero))
		{	
			numero = prompt("ingrese un numero");
			numero = parseInt(numero);
		}

	if(numero % 2 == 0 && numero != 0)
	{
		contPar++;
	}

	contadorNum = contadorNum +numero;

	if(contador == 1)
	{	
		maximo = numero;
		minimo = numero;
	}
	else
	{
		if(numero > maximo)
		{
			maximo = numero;
		}
		if(numero < minimo)
		{
			minimo = numero;
		}
	}

	respuesta = prompt("desea seguir agregando numeros si/no");

	}

	promedio = contadorNum/contador;

	document.write("<br> a)la cantidad de numeros pares es: "+contPar);
	document.write("<br> b)el promedio es: " +promedio);
	document.write("<br> c)la suma de todos los numeros es: " +contadorNum);
	document.write("<br> d)el maximo es " +maximo +" y el minimo es " +minimo);
}

