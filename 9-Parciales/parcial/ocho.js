//ingreso de alumnos, no se sabe cuantos, pedir nombre cuantos alumnos ingrese? por document.write
/* 
cantidad de alumnos
promedio total
cantidad de mujeres
cantidad de varones
cantidad de varones desaprobados
nombre de la mejor nota
promedio de mujeres
sexo de menor edad
promedio de las edades de los aprobados
cantidad de notas pares
cantidad de notas impares*/

function Mostrar()
{	
	var nombre;
	var cantidad = 0;
	var seguir="";	
	var nota;
	var acumuladorDeNotas = 0;
	var mujer = 0;
	var hombre = 0;
	var sexo="";
	var hombreDesaprobado = 0;
	var maximaNota = 0;
	var nombremaximo;
	var promedioMujeres;
	var notaMujeres = 0;
	var edad;
	var menorEdad = 0;
	var sexomenoredad;
	var edadAprobados = 0;
	var promedioAprobados = 0;
	var contadorAprobados = 0;
	var notasPares = 0;
	var notasImpares = 0;
	var notasCeros = 0;

	while(seguir != "no")
	{
		nombre = prompt("ingrese nombre del alumno: ");
		nota = prompt("ingrese la nota que se saco");
		nota = parseInt(nota);
		while(nota < 0 || nota > 10)
		{
			nota = prompt("error ingrese una nota valida");
			nota = parseInt(nota);
		}

		if(nota % 2 == 0 && nota != 0)
		{
			notasPares++;
		}
		else
		{
			if(nota % 2 == 1)
			{
				notasImpares++;
			}
			else
			{
				notasCeros++;
			}
		}


		sexo = prompt("ingrese M (mujer) o H (hombre)");
		while(sexo != "m" && sexo != "h") //cantidad de varones y de mujeres
		{
			sexo = prompt("ingrese M (mujer) o H (hombre)");
		}

		if(sexo == "m")
		{
			mujer = mujer +1;	
			notaMujeres = notaMujeres + nota; //promedio de mujeres

		}
		else
		{	if(sexo == "h")
			{
			hombre = hombre + 1;
			
			}
		}
		



		if(sexo == "h") //cantidad de varones desarobados
		{
			if(nota < 4)
			{
				hombreDesaprobado = hombreDesaprobado +1;
			}
		}

		edad = prompt("ingrese la edad");
		edad = parseInt(edad);
		while(edad < 0 || edad > 100)
		{
			edad = prompt("ingrese la edad correcta");
		}




		if(nota >= 4) //promedio de las edades de aprobados
		{

			
			contadorAprobados = contadorAprobados + 1;
			edadAprobados = edadAprobados + edad;

		}





		cantidad = cantidad +1;


		if(cantidad == 1) // menor edad
		{
			menorEdad = edad;
			sexomenoredad = sexo;
		}
		else
		{
			if(edad < menorEdad)
			{
				menorEdad = edad;
				sexomenoredad = sexo;
			}
		}

		


		if(cantidad == 1)//nombre de la mejor nota
		{
			maximaNota = nota;
			nombremaximo = nombre;
		}
		else
		{
			if(nota > maximaNota)
			{
				maximaNota = nota;
				nombremaximo = nombre;
			}
		}



		seguir = prompt("NO para salir ");

		acumuladorDeNotas = (acumuladorDeNotas + nota);





	}//fin del while


	promedioAprobados = edadAprobados / contadorAprobados;

	if(sexomenoredad == "m")
	{
		sexomenoredad = "Mujer";
	}
	else
	{
		sexomenoredad = "hombre";
	}

	document.write(" son " +cantidad +" alumnos ");

	promedio = acumuladorDeNotas/cantidad
	promedioMujeres = notaMujeres/mujer;

	document.write("<br>el promedio total es: " +promedio);
	document.write("<br> cantidad de hombres: " +hombre +" cantidad de mujeres: " +mujer);
	document.write("<br> cantidad de varones que desaprobaron: " +hombreDesaprobado);
	document.write("<br> el de la nota maxima es: " +nombremaximo);
	document.write("<br>el promedio de las mujeres es: " +promedioMujeres);
	document.write("<br> el sexo del de menor edad es: " +sexomenoredad);
	document.write("<br> el promedio de las edades de aprobados es: " +promedioAprobados);
	document.write("<br> la cantidad de notas pares es: " +notasPares +", la cantidad de notas impares es: " +notasImpares +" y la cantidad de notas 0 es: " +notasCeros );

}




