-------------------------------<<<<
//Ejercicio #1: El menor de los numeros
//Elaborar una función a la cual le enviemos tres enteros y muestre el menor.


function mostrarMenor () {
var a = prompt("Ingrese primer número");
a = Number(a);
var b = prompt("Ingrese segundo número");
b= Number(b);
var c = prompt("Ingrese tercer número");
c = Number(c);
if (a < b) {
	if (a < c) {
	return a;
	} else {
	return c;
	}
} else {
	if (b < c) {
	return b;
	} else {
	return c;
	}
}
}
console.log("El número menor es " + mostrarMenor());

--------------------------<<<<
//Ejercicio #2: Numero par o impar
/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto 
que indica si el número es par o impar. 

Mostrar por pantalla el resultado devuelto por la función.*/


function decirPar(a) {
	if ((a % 2) === 0) {
	return a + " es par";
	} else {
		return a + " es impar";
	}
}
decirPar(8);
//¿Por qué no puedo llamar varias veces a la función y que aparezca cada resultado?


-------------------------------------<<<<
//Ejercicio #3: Ordenando numeros.
//Realizar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.

function ordenar() {
	var arreglo = [];
	for(i = 0; i < 3; i++) {
		var num = prompt("Introduce número");	
		num = Number(num);
		arreglo.push(num);
	}
	console.log("Introdujiste estos números " + arreglo)
	arreglo.sort(function(a, b) {
		return a - b;
	});
	console.log("Ordenados se ven así: " + arreglo);
}
ordenar();



------------------------------
//Ejercicio #4: Mayúsculas o minúsculas
//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
//A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function() {
	
}




----------------------------------------<<<
//Ejercicio #5: Palindromo
/*Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
es decir, si se lee de la misma forma desde la izquierda y desde la derecha.

Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".*/


function isPalindromo (palabra) {
	var frase = palabra.replace (/\s/g, "");
	frase = frase.toLowerCase();
	for (var i = 0; i < frase.length; i++) {
		var x = frase[i];
		var y = frase[frase.length - (i + 1)];
		if (x !== y) {
			return "La regaste, no es un palíndromo";
		}
	} return "Perfect, es un palíndromo";
}

isPalindromo ("anitA LAVA LA tina");




------------------------------
//Ejercicio #6: Operaciones matemáticas

//Realizar un programa que te de la opción de la operación matemática que quieres realizar por medio de funciones



function calcular (opcion, num1, num2) { //el orden de los parámetros es importante
	var respuesta = 0;
	switch (opcion) {
		case 1 : 
			respuesta = num1 + num2;
			break;
		case 2 :
			respuesta  = num1 - num2;
			break;
		case 3 :
			respuesta = num1 / num2;
			break;
		case 4 :
			respuesta = num1 * num2;
			break;
		default : 
		alert ("Revisa la opcion elegida");
		break;
	}
	return respuesta;
	//o en lugar de return */alert("el resultado es " + respuesta);
}

var opcion = prompt ("Elige el número de la opción: \n 1 suma \n 2 resta \n 3 división \n 4 multiplicación");
opcion = Number(opcion);
num1 = prompt("Escribe primer numero");
num1= Number(num1);
num2 = prompt("Escribe segundo numero");
num2= Number(num2);
calcular(opcion, num1, num2);


------------




function sumar {}
function restar {}
function multiplicar {}
function dividir {}
function elevarPotencia {}

var operacion = prompt ("Introduzca la operación que quiere realizar: suma, resta, multiplicacion. division, potencia")
if (operacion = "suma") {
	var resultado = prompt ("Introduzca el " + i + " numero a sumar. Para salir escriba r");
	while (resultado !== "r") {
	resultado = resultado + resultado;
	alert("El resultado de la suma es " + resultado);
	i++;
	}
	
} else if (operacion = "resta") {
	var resultado = prompt ("Introduzca el " + i + " numero a restar. Para salir escriba r");
	for (resultado = 0; resta !== r; i++) {
	resta = resta - resta;
	alert("El resultado de la resta es " + resta);
	}
} else if (operacion = "multiplicacion") {
	var multi = prompt ("Introduzca el " + i + " numero a multiplicar. Para salir escriba r");
	for (multi = 1; multi !== r; i++) {
	multi = multi * multi;
	alert("El resultado de la resta es " + resta);
	}

		
}
console.log("El resultado de la operacion es " + resultado);

Ejercicio #7: Cuadrado de la suma de dos numeros


Realizar un programa que calcule el cuadrado de la suma de dos números







function sacarCuadrado (a,b) { 
	var suma = a + b;
	return suma * suma;
}
console.log(sacarCuadrado);



------------------<<<<<
//Ejercicio #8: Numero primo

//Realizar un programa que por medio de una función nos indique si el número que el usuario ingresa es primo o no

/*function revisarPrimo(a) {
	var a = prompt ("Introduzca el número");
	a = Number(a);
	for (i = 2; a % i != 0; i++) {
	var divisor = i;
	}
	if (divisor === a) {
	console.log("Si es primo")
	} else {
	console.log("No es primo")}
}
saberPrimo (10);*/

function saberPrimo (numero) {
	numero = prompt("Introduce el número");
	numero = Number(numero);
	if (numero === 2 || numero === 3 || numero === 5 || numero === 7) {
		console.log(numero + " si es primo");
	} else if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
		console.log(numero + " no es primo");
	} else {
		console.log(numero + " si es primo");
	}
}
saberPrimo ();
-----------------------------------<<<<<<<<<
//Ejercicio #9: Múltiplos de un numero

//Programa que calcula los 10 primeros múltiplos del número que queramos, utilizando una función que retorna parámetro.


function() {
	var numero = prompt("Escribe el número");
	numero = Number(numero);
	console.log("Los múltiplos son: \n")
	for (i = 1; i <=10; i++){
		var multiplo = numero * i;
		console.log ("multiplo")
	};
}





-------------------------------
//Ejercicio #10: Cantidad de digitos
//Desarrollar una función que retorne la cantidad de dígitos que tiene una variable entera positiva.

function leerDigitos (numero) {
	numero.lenght
}
leerDigitos(1987);

