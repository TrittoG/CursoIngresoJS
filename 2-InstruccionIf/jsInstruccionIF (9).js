function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var random;

	random = (Math.random()*10)+1;

	//el random genera un numero del 0 al 1, lo multiplico por 10 y le sumo 1 para que me den numeros del 1 al 10.

	random = parseInt(random);

	//aca le saque los decimales

	alert(random);
	



}//FIN DE LA FUNCIÓN