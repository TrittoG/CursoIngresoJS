//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var alumnos;
	var sexo ="";
	var promedio;
	var sumaNota = 0;
	var notaBaja;
	var mSeis = 0;

	for(alumnos = 0; alumnos < 6; alumnos++ )
	{
		nota = prompt("ingrese una nota");
		nota = parseInt(nota);

		while(nota < 0 || nota > 10)
		{
			nota = prompt("ingrese una nota");
			nota = parseInt(nota);
		}

		sexo = prompt("ingrese el sexo m/f");
		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt("ingrese el sexo m/f");
		}

		sumaNota = sumaNota + nota;

		if(alumnos == 0)
			{
				notaBaja = nota;
			}
			else
			{
				if(nota < notaBaja)
				{
					notaBaja = nota;
				}
			}

		mSeis = parseInt(mSeis);

		if(sexo == "m" && nota >= 6)
		{
				mSeis = mSeis +1;
			 
		}

	}

	promedio = sumaNota/alumnos;
	
	alert("el promedio es: " +promedio);
	alert("la nota mas baja fue: " +notaBaja);
	alert("la cantidad de varones que se sacaron mas de 6 fue: " +mSeis);

}

