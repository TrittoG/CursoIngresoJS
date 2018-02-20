/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var intentos;
var numero;
function comenzar()
{	
	
	numeroSecreto = Math.floor((Math.random()*100)+1);

	console.log(numeroSecreto);

	intentos = 0;

	document.getElementById('intentos').value = intentos;

	
	//Genero el número RANDOM entre 1 y 100
	 
	

}

function verificar()
{	
	intentos = intentos + 1;

	document.getElementById('intentos').value = intentos;
	numero = document.getElementById('numero').value ;
	numero = parseInt(numero);

	switch(intentos)
	{
		case 1 :
		{
			if(numero == numeroSecreto)
			{
				alert("usted es Psíquico");
			}
		}break;

		case 2 :
		{
			if(numero == numeroSecreto)
			{
				alert("excelente");
			}
		}break;

		case 3 :
		{
			if(numero == numeroSecreto)
			{
				alert("esto es suerte");
			}
		}break;

		case 4 :
		{
			if(numero == numeroSecreto)
			{
				alert("excelente tecnica");
			}
		}break;


		case 5 :
		{
			if(numeroSecreto == numero)
			{
				alert("usted esta en la media");
			}
		}break;

		case 6 :
		case 7 :
		case 8 :
		case 9 :
		case 10:
		{
			if(numero == numeroSecreto)
			{
				alert("falta tecnica");
			}
		}break;

		default :
		{
			if(numero == numeroSecreto)
			{
				alert("bin en el amor");
			}
		}break;



	}	

	


}