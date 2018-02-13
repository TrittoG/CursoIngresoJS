function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;

	nota = (Math.random()*10)+1;

	nota = parseInt(nota);

	alert(nota);

	if(nota >= 9){

		alert("Excelente");

	}else
	{
		if(nota>=4){
			alert("Aprobo");
		}else
			alert("DESAPROBADO");
	}
}//FIN DE LA FUNCIÓN