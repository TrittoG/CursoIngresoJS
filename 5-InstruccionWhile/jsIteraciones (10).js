function Mostrar()
{

	var contador=0;
	var numero;
	var positivos = 0;
	var negativos = 0;
	var cantPos = 0;
	var cantNeg = 0;
	var cantCer = 0;
	var contpares = 0;
	var promediopos;
	var promedioneg;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta = "si";

	while(respuesta != "no")
	{
		contador++;
		numero =prompt("ingrese un valor");
		numero = parseInt(numero);

		if(numero < 0)
		{
			negativos = negativos + numero;
			cantNeg = cantNeg +1;
		}
		else
		{
			if(numero > 0)
			{
				positivos = positivos + numero;
				cantPos = cantPos +1;
			}
			else
			{
				cantCer = cantCer +1;
			}
		}


		if(numero % 2 == 0)
		{
			contpares++;
		}


		if(numero > 0)
		{
			promediopos = positivos / cantPos ;
		}	
		else
		{
			if(numero < 0)
			{
				promedioneg = negativos/cantNeg;
			}
		}


		diferencia= positivos - negativos;


		respuesta = prompt("desea ingresar otro numero?", "si/no");
		
	}


	document.write("<br>" +"1)suma negativos " +negativos +"<br>" +"2)suma de positivos: " +positivos +"<br>" +"3)cantidad de positivos: " +cantPos 
		+"<br>" +"4)cantidad de negativos: " +cantNeg +"<br>" +"5)cantidad de ceros: " +cantCer +"<br>" +"6)Cantidad de pares: " +contpares
		+"<br>" +"7)promedio de positivos: " +promediopos +"<br>" +"8)promedio de negativos" +promedioneg +"<br>" +"9)diferencia entre positivos y negativos" +diferencia);




}//FIN DE LA FUNCIÓN