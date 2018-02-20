function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{	
		contador++;
		numero =prompt("ingrese un valor");
		numero = parseInt(numero);

		if(contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}

		respuesta = prompt("desea agregar otro numero?", "si/no?");
		
	
	}


document.getElementById('maximo').value = maximo;
document.getElementById('minimo').value = minimo;

}//FIN DE LA FUNCIÓN