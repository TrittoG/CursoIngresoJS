function Mostrar()
{
	var mes;

	mes = prompt("ingrese un mes");

	switch(mes)
	{
		case "Diciembre" :
		
			alert("se vienen las fiestas!");
		break;

		case "Enero" :
		
			alert("Comienza el año");
		break;

		default :
		
			alert("no es enero ni diciembre");
		 break;	

	}


}
