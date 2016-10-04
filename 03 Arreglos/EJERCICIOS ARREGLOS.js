------------------------------<<<
//Ejercicio #1: Calculando DNI
/*El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en 
obtener el residuo de la división entera del número de DNI entre el número 23.

A partir del residuo de la división, se obtiene la letra seleccionándola dentro de un array de letras.

El array de letras es:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Por tanto si el residuo de la división es 0, la letra del DNI es la T y si el residuo es 3 la letra es la A. 
Con estos datos, elaborar un pequeño script que:

Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del 
DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())

En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. 
Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.

Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.

Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole 
que la letra que ha indicado no es correcta.
En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDni = prompt("Indique el número de DNI");
numeroDni = Number(numeroDni);
var letraDni = prompt("Indique la letra asignada ", "MAYÚSCULA");


if ((numeroDni < 0) || (numeroDni > 99999999)) { 
	alert("el número proporcionado no es válido");
	} else {
		var dividido = numeroDni / 23;
		if (letraDni == letras[dividido]){
			alert("El número y la letra DNI son correctos");
		} else {
			alert("La letra no es correcta");
		}

	}



-----------------------<<
//Ejercicio #2: Añadir elementos a un array con push (Ciclo for)
//Crear un array de elementos que contenga nombres y posteriormente agregar más elementos por medio del método “push”

var i = 0;
var nombres = [];
while (nomb !="0") {
	var nomb = prompt("Ingrese el nombre");
	if (nomb !="0") {
		nombres.push(nomb);
		i++;
	}
}
alert("Los nombres son: " + i + ": " + nombres);

***********
var nombres = [];
for (var i = -1; nomb != "0"; i++ ) {
	var nomb = prompt("Ingrese el nombre");
	if (nomb !="0") {
		nombres.push(nomb);
		i++;
	}
}
alert("Los nombres son: " + i + ": " + nombres);

---------------------------<<
//Ejercicio #3: Creando arrays
/* Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla los doce nombres utilizando la función alert()*/

var meses = ["enero" , "febrero" , "marzo" ,  "abril" , "mayo" , "junio" , "julio" ,  "agosto" , "septiembre" , "octubre" , "noviembre" , "diciembre"];
var i = 1;
for (var i = 0; i < 12; i++) {
	alert(meses[i]);
}



------------------------------<<
//Ejercicio #4: Operaciones en arrays
/*A partir del siguiente array que se proporciona:
var valores = [true, 5, false, "hola", "adios", 2];
*/

var valores = [true, 5, false, "hola", "adios", 2];

//Determinar cuál de los dos elementos de texto es mayor 
if (valores[3].length > valores[4].length ) {
	console.log(valores[3] + " tiene más letras que " + valores[4]);
} else {
	console.log(valores[4] + " tiene más letras que " + valores[3]);
}

//Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
console.log("Operaciones matemáticas:")
var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var multiplicacion = valores[1] * valores[5];
var division = valores[1] / valores[5];
var potencia = valores[1] * valores[1];
console.log("La suma es " + suma);
console.log("La diferencia es " + resta);
console.log("El producto es " + multiplicacion);
console.log("La división es " + division);
console.log(valores[1] + " elevado a la potencia " + valores[5] + " es " + potencia);

//Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
if (valores[0] == (6>5)) { 
	console.log("True");
} else {
	console.log("false");
}

if (valores[2] == (5<6)) {
	console.log("true");
} else {
	console.log("False");
}


-----------------------------<<
//Ejercicio #5: Suma de números
//Hacer un ejercicio que nos pida 10 números y luego que sume esos valores.


/*
¿POR QUÉ ASI NO FUNCIONA?
var arreglo = [];
var suma = 0;
for (var i = 0; i < 10; i++ ) {
	var num = prompt("Ingrese el número");
	num = Number(num);
	arreglo.push(num);
}
alert("Los números son: " + arreglo);

for (var j = 0; j < 10; j++); {
	var suma = suma + arreglo[j];
}
alert("La suma es: " + suma);*/

var arreglo = [];
var suma = 0;
for (var i = 0; i < 10; i++ ) {
	var num = prompt("Ingrese el número");
	num = Number(num);
	arreglo.push(num);
	suma = suma + arreglo [i];
}
alert("Los números son: " + arreglo + ". La suma es: " + suma);
