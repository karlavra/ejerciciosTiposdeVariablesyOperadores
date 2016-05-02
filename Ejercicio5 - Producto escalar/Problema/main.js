function productoEscalar(){
	var v1=parseInt(prompt("Ingrese cordenada x del primer vector"));
	var v2=parseInt(prompt("Ingrese cordenada y del primer vector"));
	var v3=parseInt(prompt("Ingrese cordenada x del segundo vector"));
	var v4=parseInt(prompt("Ingrese cordenada Y del segundo vector"));

	var vector1=[v1,v2];
	var vector2=[v3,v4];

	var resultado=(v1*v3)+(v2*v4);

	alert("El producto escalar de los vectores: "+"\n"+ vector1+" y "+vector2+" es " +resultado);
}
productoEscalar()


