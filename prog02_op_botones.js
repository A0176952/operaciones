function suma(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x+y;
	document.datos.opera.value="Suma";
	document.datos.res.value=r;
}
function resta(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x-y;
	document.datos.opera.value="Resta";
	document.datos.res.value=r;
}
function multiplicación(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x*y;
	document.datos.opera.value="Multiplicación";
	document.datos.res.value=r;
}
function división(){
	x=parseInt(document.datos.v1.value);
	y=parseInt(document.datos.v2.value);
	r=x/y;
	document.datos.opera.value="División";
	document.datos.res.value=r;
}