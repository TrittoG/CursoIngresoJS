//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

	var importe;
	var dia;
	var mayor;
	var menor;

	for(dia = 0; dia < 7; dia++)
	{
		importe = prompt("ingrese el importe de venta");
		importe = parseInt(importe);
		while(importe < 0)
		{
			importe = prompt("ingrese el importe de venta");
			importe = parseInt(importe);
		}

		if(dia == 1)
		{
			mayor = importe;
			menor = importe;
		}
		else
		{
			if(importe > mayor)
			{
				mayor = importe;
			}
			if(importe < menor)
			{
				menor = importe;
			}
		}



	}
	

	alert("el mayor importe es: " +mayor);
	alert("el menor importe es: " +menor);

}

