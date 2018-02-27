function Mostrar()
{
	var numero;
	var respuesta = "";
	var contPares = 0;
	var sumaNum = 0;
	var contador = 0;
	var numMax;
	var numMin;


	while(respuesta != "no")
	{

		contador++;

		numero = prompt("ingrese un numero positivo");
		numero = parseInt(numero);
		while(numero < 0)
		{
			numero = prompt("ingrese un numero positivo");
			numero = parseInt(numero);
		}

		if(numero % 2 == 0)
		{
			contPares++;
		}

		sumaNum = sumaNum + numero;

		if(contador == 1)
		{
			numMax = numero;
			numMin = numero;
		}
		else
		{
			if(numero > numMax)
			{
				numMax = numero;
			}
			if(numero < numMin)
			{
				numMin = numero;
			}
		}


		
		respuesta = prompt("desea seguir agregando numeros? si/ no");
	}//fin del while

	promedio = sumaNum/contador;

	document.write("<br>a) la cantidad de numeros pares es: " +contPares);
	document.write("<br>b) el promedio de los numeros es : " +promedio);
	document.write("<br>c) la suma de todos los numeros es : " +sumaNum);
	document.write("<br>d) el numero maximo es: " +numMax);
	document.write("<br>e) el numero minimo es " +numMin);

}
