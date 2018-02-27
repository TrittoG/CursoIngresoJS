function Mostrar()
{
	var uno;
	var dos;
	var suma;

	uno = prompt("ingrese un numero");
	dos = prompt("ingrese otro numero");

	uno = parseInt(uno);
	dos = parseInt(dos);

	suma = uno + dos;

	if(suma == 0)
	{
		document.write("<br> la suma da cero");
	}
	else
	{
		if(suma > 0)
		{
			document.write("la suma es positiva");
		}
		else
		{
			document.write("la suma es negativa");
		}
	}

}
