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


		if(numero % 2 = 0)
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


	document.write("<br>" +"suma negativos" +negativos);




}//FIN DE LA FUNCIÓN