function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;

	if(edad>18){
		alert("Es mayor de edad");
	}	
	else 
	{
		if(edad >13){
			alert("es un adolescente");
		}
		else
		{
			alert("es un niño");
		}
	}



}//FIN DE LA FUNCIÓN