/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;

	numero1 = parseInt(document.getElementById('numeroUno').value);
	numero2 = parseInt(document.getElementById('numeroDos').value);

	alert("la suma es: " +(numero1+numero2));



}

