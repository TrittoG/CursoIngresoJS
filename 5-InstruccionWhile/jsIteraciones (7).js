function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	while(respuesta != "no")
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		contador = contador+1;

		respuesta = prompt("desea escribir otro numero?");

		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN