function Mostrar()
{	
	
	var contador;
	var contadorPos= 0;
	var contadorNeg = 0;
	var contadorCer = 0;
	var contadorPar = 0;
	var contadorImpar = 0;
	var contador50 = 0;



	for(contador = -100; contador < 100;contador++ )
	{


		
		if(contador > 0)
		{	
			contadorPos++;

		}
		else
		{	if(contador < 0)
			contadorNeg++;
			else
			{
			contadorCer++;
			}
		}






		if(contador % 2 == 0 && contador != 0)
		{
			contadorPar++;
		}
		else
		{	
				if(contador != 0)
				{
				contadorImpar++;
			}
		}




		switch(contador)
		{
			case 50 :
				contador50++;
				break;

		}




		
	}


	document.write("positivos: " +contadorPos);	
	document.write(" Negativos: " +contadorNeg);
	document.write(" Ceros: " +contadorCer);
	document.write(" pares: " +contadorPar);
	document.write(" Impares: " +contadorImpar);
	document.write(" cont50: " +contador50);




	/*for(; ; )
	{
		 contador++
		document.write("<br>" +contador);


		if(contador == 10)
		{
			
			document.write("<br>break" +contador);
			break;

		}

		if(contador == 5)
		{
			continue;
		}
		document.write("<br>continue" +contador);
	}*/

}//cierre