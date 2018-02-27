function Mostrar()
{
	var contenedores;
	var peso;
	var pesado;
	var liviano;
	var contenedorPesado;
	var contenedorLiviano;

	for(contenedores = 0; contenedores < 5;contenedores++)
	{
		

		peso = prompt("ingrese el peso del contenedor:");
		peso = parseInt(peso);

		while(peso < 0)
		{
			peso = prompt("ingrese el peso del contenedor:");
			peso = parseInt(peso);
		}

		if(contenedores == 1)
		{
			pesado = peso;
			liviano = peso;

			contenedorPesado = contenedores;
			contenedorLiviano = contenedores;
		}
		else
		{
			if(peso < liviano)
			{
				liviano = peso;
				contenedorLiviano = contenedores;
			}
			if(peso > pesado)
			{
				pesado = peso;
				contenedorPesado = contenedores;
			}
			
		}

	}

		alert("el mas pesado fue: " +contenedorPesado);
		alert("el mas liviano fue: " +contenedorLiviano);

}
