function Mostrar()
{	
	var n0 = 0;
	var n0 = 0;
	var n1 = 0;
	var n2 = 0;
	var n3 = 0;
	var n4 = 0;
	var n5 = 0;
	var n6 = 0;
	var n7 = 0;
	var n8 = 0;
	var n9 = 0;

	var random;

	var porcen0;
	var porcen1;
	var porcen2;
	var porcen3;
	var porcen4;
	var porcen5;
	var porcen6;
	var porcen7;
	var porcen8;
	var porcen9;

	var itraciones= 10000;




	for(i=0; i < itraciones; i++)
	{
		random = Math.floor(Math.random()*10);
		console.log(random);
		


		switch(random)
		{
			case 0 :
			{
				n0++;

			}break;

			case 1 :
			{
				n1++;
			}break;

			case 2 :
			{
				n2++;
			}break;

			case 3 :
			{
				if(n3 %4 == 0)
				{
					n3++;
					i++;
				}
				n3++;
				
			}break;

			case 4 :
			{
				n4++;
			}break;

			case 5 :
			{
				n5++;
			}break;

			case 6 :
			{
				porcen6 = (n6 / (itraciones + 1)) * 100;
				
				if(porcen6 >7)
				{
					i--;
				}
				else
				{
					n6++;
				}
				

			}
			break;

			case 7 :
			{
				n7++;
			}break;

			case 8 :
			{
				n8++;
			}break;

			case 9 :
			{
				n9++;
			}break;


		}

	

	}

	porcen0 = (n0/(i+1))*100;
	

	porcen1 = (n1/(i+1))*100;
	

	porcen2 = (n2/(i+1))*100;
	

	porcen3 = (n3/(i+1))*100;
	

	porcen4 = (n4/(i+1))*100;


	porcen5 = (n5/(i+1))*100;
	

	porcen6 = (n6/(i+1))*100;


	porcen7 = (n7/(i+1))*100;
	

	porcen8 = (n8/(i+1))*100;
	

	porcen9 = (n9/(i+1))*100;
	





	document.write(" numero 0 = " +n0 +"----" +porcen0 +"%");
	document.write("<br> numero 1 = " +n1 +"----" +	porcen1 +"%");
	document.write("<br> numero 2 = " +n2 +"----" +porcen2 +"%");
	document.write("<br> numero 3 = " +n3 +"----" +porcen3 +"%");
	document.write("<br> numero 4 = " +n4 +"----" +porcen4 +"%");
	document.write("<br> numero 5 = " +n5 +"----" +porcen5 +"%");
	document.write("<br> numero 6 = " +n6 +"----" +porcen6 +"%");
	document.write("<br> numero 7 = " +n7 +"----" +porcen7 +"%");
	document.write("<br> numero 8 = " +n8 +"----" +porcen8 +"%");
	document.write("<br> numero 9 = " +n9 +"----" +porcen9 +"%");




}