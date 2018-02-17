function Mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño = document.getElementById('mes').value;


switch(mesDelAño){

	case "Enero" :
	case "Febrero" :
	case "Marzo" :
	case "Abril" :
	case "Mayo" :
	case "Junio" :
		alert("falta para invierno");
		break;
	
	case "Julio" :
	case "Agosto" :
		alert("invierno");
		break;
		
	case "Septiembre" :
	case "Octubre" :
	case "Noviembre" :
	case "Diciembre" :
		alert("ya paso el invierno");
		break;									

}




}//FIN DE LA FUNCIÓN