//EJERCICIO #01 DE VARIOS - ESTATURA
var i = 0;
var promedio;
var suma = 0;
do {
	var s = prompt ("Introducir estatura en cm. Para resultados introduzca cero");
	s = Number(s);
	if (s !==0) {
		i++;
	}
	suma = suma + s;
} while (s>0)
promedio = suma / i;
console.log ("Promedio de estatura del Super Squad 6: " + promedio + "cm")
console.log ("Número de personas: " + i)


//EJERCICIO #02 DE VARIOS: IGUAL O MENOR A CERO -----------R E V I S A Rrrrrrr -----------
a = "a"
for(j = 0, i = 0; numero != a;) {
	if (numero <= 0) {
		i++;
	} else {
		j++;
	}
	var numero = prompt("Introduce un numero, para salir introduce a");
	numero = Number(numero);
}
console.log("Cantidades mayores a cero: " + j + " Cantidades menores a cero: " + i);



//EJERCICIO #3 DE VARIOS: SUCESIÓN DE FIBONACCI
var n = prompt("Escribe el número de elementos requeridos");
var m = Number(n);
var a = 0;
var b = 1;
var i = 2;
console.log(a);
console.log(b);
while (i<=m) {
	a+=b; // a = a+b 
	i++; // i = i+1 , i+=1
	console.log(a);
	b+=a;
	i++;
	console.log(b);
}


//EJERCICIO #04 - AGUASCALIENTES - ZACATECAS
var ags;
var zac;
for (ags=70, zac=150; ags != zac;) {
	ags++;
	zac--;
}
console.log ("Se encontrarán en el kilómetro: " + ags);



//EJERCICIO #05 - NUMEROS PARES
var i = 0;
do {
	console.log (i);
	i+= 2;
} while (i <= 100);




//EJERCICIO #07 DE VARIOS - HORAS DE TRABAJO
var pgHr = prompt ("Introduzca el PAGO POR HORA");
pgHr = Number(pgHr);
var i = 1;
var suma = 0;
var pgSem = 0;
while (i<=6) {
	var hrs = prompt ("Introduzca las horas del día");
	hrs = Number(hrs);	
	suma = suma + hrs;
	pgSem = suma * pgHr;
	i++;
}
console.log ("Horas trabajadas: " + suma + ". Pago semanal: $" + pgSem);




//EJERCICIO #08 DE VARIOS: TIKI TAKA
var i = 0;
var j = 0;
var k = 0;
var sumi = 0;
var sumj = 0;
var sumk = 0;
var v = 1;
while (v > 0) {
	v=prompt("Introduzca el monto de la venta sin comas. Escriba 0 para mostrar resultados.");
	v=Number(v);
	if (v > 500) {
		if (v >= 1000) {
			i++;
			sumi+=v;
		} else {
			j++;
			sumj+=v;
		}
	} else 
		{
		if (v !== 0) {//para que no sume el cero como una venta más 
		k++;
		sumk+=v;
		}
	}
}
var total = sumi + sumj + sumk;
console.log("Ventas de Juan Pérez en la Tienda Tiki Taka:")
console.log("Las ventas mayores a $1,000 son: " + i + ", Monto: $" + sumi)
console.log("Las ventas mayores a $500 y menores a $1,000 son: " + j + ", Monto: $" + sumj)
console.log("Las ventas menores a $500 son: " + k + ", Monto $" + sumk)
console.log("La venta global es de $" + total)




//EJERCICIO #8 - NUMERO A POTENCIA
var num = prompt ("Introduzca el número base");
num = Number(num);
var pot = prompt ("Introduzca la potencia");
pot = Number(pot);
if (pot === 0) {
	console.log (num + "a la potencia cero es igual a 1");
} else {
	var r = num;
	for (i = 1; i < pot; i++) {
		r = r * num;
	}
}
console.log (num + " a la potencia " + pot + " es igual a " + r);


//EJERCICIO #09 - CALIFICACIONES ALUMNOS
var suma = 0; //es necesario indicar que suma es un numero, si no, arroja NaN
for (cont = 1, nA = 40, baja = 10; cont <= nA; cont++) {
	var cal = prompt ("Ingrese calificación del alumno");
	cal = Number(cal);
	var suma = suma + cal;
	if (baja > cal) {
		baja = cal;
	} 
}
var prom = suma / nA;
console.log ("El promedio es " + prom)
console.log ("La calificación más baja es " + baja)


//EJERCICIO #09 DE VARIOS - MENSUALIDADES
var i
var suma = 0
var pago
for (pago=10, i=1; i<=20; i++) {
	console.log ("El pago número " + i + " será de $" + pago);
	suma+=pago;
	pago = pago * 2;
}
console.log ("El pago total será de: " + suma)

//Transaron a la señora!!!!!


//EJERCICIO #10 - CUBO Y CUARTA DE 10 NUMEROS
var i = 1;
var cubo = 0;
var cuarta = 0;
do {
	num = prompt ("Introduzca el número");
	num = Number(num);
	i++;
	cubo = num * num * num;
	cuarta = num * num * num * num;
	console.log ("Cubo de " + num + " es " + cubo);
	console.log ("Cuarta de " + num + " es " + cuarta);
} while (i <= 10);


