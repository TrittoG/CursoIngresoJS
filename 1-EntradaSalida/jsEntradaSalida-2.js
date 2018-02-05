/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/



function Mostar()
{

    //guardar con crl + s
	//alert("anda");
	var nombre;
/*	alert(nombre);
	nombre="Giuliano";
	alert(nombre);
*/
	nombre = prompt("ingrese su nombre", "ej:Giuliano");
	//alert(nombre);
	alert("su nombre es: " + nombre);
}

