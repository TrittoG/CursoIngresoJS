function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta="si";



	while(respuesta != "no")
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

			if(numero > 0)
			{
				positivo = positivo + numero;
			}
			else
			{

				negativo = negativo * numero;

			}


		respuesta = prompt("desea poner otro numero?", "si/no");

		}
		







document.getElementById('suma').value=positivo;




document.getElementById('producto').value=negativo;

if(negativo== 1)
{
	document.getElementById('producto').value = "Nan";
}

}//FIN DE LA FUNCIÓN