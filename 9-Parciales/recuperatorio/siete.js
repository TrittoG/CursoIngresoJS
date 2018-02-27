function Mostrar()
{

	var edad;
	var sexo;
	var personas;
	var promedio;
	var sumaEdad = 0;
	var edadBaja;
	var contador = 0;

	for(personas = 0; personas < 100; personas++)
	{
		edad = prompt("ingrese la edad:");
		edad = parseInt(edad);

		while(edad < 0 || edad > 100)
		{
			edad = prompt("ingrese la edad:");
			edad = parseInt(edad);
		}

		sexo = prompt("ingrese su sexo m/f");
		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt("ingrese su sexo m o f");
		}

		sumaEdad = sumaEdad + edad;

		if(personas == 1)
		{
			edadBaja = edad;
		}
		else
		{
			if(edad < edadBaja)
			{
				edadBaja = edad;
			}
		}


		if(sexo == "m")
		{
			if(edad >= 20)
			{
				contador++;
			}
		}



	}//fin del for

	promedio= sumaEdad/personas;

	alert("a)el promedio de edad es: " +promedio);
	alert("b)la edad mas baja es: " +edadBaja);
	alert("c)cantidad de varones de mas de 20 años : " +contador);

}
