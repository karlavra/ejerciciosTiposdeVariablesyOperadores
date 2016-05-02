function conversionDeEdad (){
	var nombre= prompt("¿cual es tu nombre?");
	var edad= parseInt(prompt("¿cual es tu edad"));
	var dias_vividos= edad*365;
	alert("Hola "+nombre+" hasta la fecha tienes "+dias_vividos+" días de vida");
}

conversionDeEdad()
