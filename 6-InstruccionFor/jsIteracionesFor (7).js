function Mostrar()
{	
	var contDiv = 0;
	var numero =  prompt("ingrese numero");
	numero = parseInt(numero);

	for(anterior = 2; anterior < numero; anterior++)
	{
		if(numero % anterior == 0)
		{
			document.write("<br>" +anterior);
			contDiv++;
		}

		if(anterior > (numero/2))
		{
			break;
		}
	}

	if(contDiv == 0)
	{
		document.write("es primo");
	}	



}//FIN DE LA FUNCIÓN