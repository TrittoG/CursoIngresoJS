
function Mostrar()
{
	var base;
	var superficie;

	base = document.getElementById('laBase').value;
	base = parseInt(base);
	superficie = base * base;

	alert("la superficie es: " +superficie +" cm²");
}
