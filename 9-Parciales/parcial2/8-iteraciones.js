//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//pedir el nombre de un animal, el peso, validar mayor a 0, y la temperatura del 
//habitat en donde vive(entre -40 y 40) informar cantidad de temperaturas pares
//cantidad de temperaturas impares, el nombre del animal mas pesado
//el nombre del animal menos pesado, la cnatidad de animales cuyo habitat
//tiene menos de 0 grados, el promedio de peso de todos los animales,
//la temperatura maxima y minima ingresada, 
function Mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var tempPar = 0;
	var tempImpar = 0;
	var contador = 0;
	var animalPesado;
	var animalLiviano;
	var pesomax;
	var pesoMin;
	var animalesFrios = 0;
	var sumaPesos = 0;
	var promedioPesos;
	var temperaturaMaxima;
	var temperaturaMinima;


	var respuesta = "";


	while(respuesta != "no")
	{
		contador++;

		animal = prompt("ingrese el nombre de un animal");
		
			
		
		//valido su peso
		peso = prompt("ingrese el peso de ese animal");
		peso = parseInt(peso);
		while(peso <= 0 || isNaN(peso))
		{
			peso = prompt("ingrese el peso de ese animal");
			peso = parseInt(peso);
		}

		//temperatura del habitat
		temperatura = prompt("ingrese la temperatura del habitat donde vive");
		temperatura = parseInt(temperatura);
		while(temperatura < -40 || temperatura > 40 || isNaN(temperatura))
		{
			temperatura = prompt("ingrese la temperatura del habitat donde vive");
			temperatura = parseInt(temperatura);
		}

		sumaPesos = sumaPesos + peso;

		//temperaturas pares e impares
		if(temperatura % 2 == 0 && temperatura != 0)
		{
			tempPar++;
		}
		else
		{	
			if(temperatura != 0)
			{
			tempImpar++;
			}
		}


		//animal mas pesado y liviano
		if(contador == 1)
		{	
			pesomax = peso;
			pesoMin = peso;
			animalPesado = animal;
			animalLiviano = animal;
		}
		else
		{
			if(peso > pesomax)
			{
				animalPesado = animal;
				pesomax=peso;
			}
			if(peso < pesoMin)
			{
				animalLiviano = animal;
				pesoMin = peso;
			}
		}

		//cantidad de animales cuyo habitat es menor a 0 grados
		if(temperatura < 0)
		{	
			animalesFrios++;

		}

		//temperaturas maximas y minimas ingresadas
		if(contador == 1)
		{
			temperaturaMinima = temperatura;
			temperaturaMaxima = temperatura;
		}
		else
		{
			if(temperatura > temperaturaMaxima)
			{
				temperaturaMaxima = temperatura;
			}
			if(temperatura < temperaturaMinima)
			{
				temperaturaMinima = temperatura;
			}
		}









		respuesta = prompt("desea ingresar otro animal si/no");
	}//fin del while

	promedioPesos = sumaPesos/contador;

	document.write("<br> la cantidad de temperaturas pares es: " +tempPar);
	document.write("<br> la cantidad de temperaturas impares es: " +tempImpar);
	document.write("<br> el animal mas pesado es: " +animalPesado);
	document.write("<br> el animal mas liviano es : " +animalLiviano);
	document.write("<br> la cantidad de animales cuyo habitat es menor a 0 grados : " +animalesFrios);
	document.write("<br> el promedio de peso es : " +promedioPesos);
	document.write("<br> la temperatura minima es : " +temperaturaMinima);
	document.write("<br> la temperatura maxima es  : " +temperaturaMaxima);



	
}

