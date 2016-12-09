---------------------<<
//Ejercicio #1 Completando condiciones

Completar las condiciones de los if del siguiente script para que los mensajes de los alert() se muestren siempre de forma correcta:

var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) { 
    alert("numero1 no es mayor que numero2"); 
}

if(numero2 >= 0){
  alert("numero2 es positivo");
}

if(numero1 - (numero1 + 1) < 0){
  alert("numero1 es negativo o distinto de cero");
}

if( (numero1 + 1) < numero2){
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


-------<<
//Ejercicio #2 Factorial de un numero
/*El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores 
n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.*/

var n = prompt("Introduzca factorial");
n = Number(n);
for (i = n-1, resultado = n; i > 0; i--) {
	var resultado = resultado * i;
}
console.log(n + " factorial (n!) " + "es igual a " + resultado );


---------- <<
//Ejercicio #3: Operaciones matematicas
Pedir dos numeros y despues realizar las siguientes operaciones:
-Si el primer numero es mayor que el segundo, sumarlos y restarlos 
-Sino, si los dos numeros son iguales, mandar una alerta indicando eso, 
-sino multiplicarlos y dividirlos

var num1 = prompt ("Ingrese el primer número");
num1 = Number(num1);
var num2 = prompt ("Ingrese el segundo número");
if (num1 > num2) {
	var suma = num1 + num2;
	var resta = num1 + num2;
	console.log("La suma es " + suma + "; La resta es " + resta)
} else if (num1 == num2) {
	alert("Ambos números son iguales");
} else {
	var multiplica = num1 * num2;
	var division = num1 / num2;
	console.log("El producto de ambos es " + multiplica + " Numero uno entre numero dos es " + division);
}


---------<<<
//Ejercicio #4: Saldo bancario

/*En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, 
nombre del cliente y saldo actual. 
El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta:
'Acreedor' si el saldo es >0. 
'Deudor' si el saldo es <0. 
'Nulo' si el saldo es =0.

b) La suma total de los saldos acreedores.*/
//Numero de cuenta
//Nombre del cliente
//Estado de cuenta. 

do {
		var numCuenta = prompt("Ingrese número de cuenta");
		numCuenta = Number(numCuenta);
	if (numCuenta > 0 ) {	
		var cliente = prompt("Ingrese nombre");
		var saldo = prompt("Ingrese saldo")
		if (saldo > 0) {
			var estado = "Acreedor";
		} else if (saldo < 0) {
			estado = "Deudor";
		} else if (saldo === 0) {
			estado = "Nulo"
		}
		console.log ("Número de cuenta " + numCuenta + cliente + " su saldo es $" + saldo + ", " + estado )
	}
} while (numCuenta > 0);



---------<<
//Ejercicio #5: Repetir un texto
//Realizar un programa que repite un texto cualquiera en número de veces que queramos, utilizando un “for”
var repeticion = prompt("¿Cuántas veces quieres visualizar el texto");
for (var i = 0; i < repeticion; i++) {
	console.log("Tienes que obedecer.")
}



---------<<
//Ejercicio #6: Multiplos de 11
//Realizar un programa que calcula todos los múltiplos de 11 menores de 3000 y por último nos da la suma de todos ellos.
console.log("Múltiplos de 11:");	
for (var i = 11; i < 3000; i++) {
	if (i % 11 === 0) {
		console.log(i);	
	}
	
}

----------------<<
/*Ejercicio #7: Listas de valores
Realizar un programa que permita cargar dos listas de 3 valores cada una. 
Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.*/

for (i = 1, suma1 = 0; i <= 3; i++) {
	var canti1 = prompt ("Ingrese la " + i + " cantidad de la lista 1");
	canti1 = Number(canti1);
	suma1 = suma1 + canti1;
}
for (j = 1, suma2 = 0; j <= 3; j++) {
	var canti2 = prompt("Ingrese la " + j + " cantidad de la lista 2");
	canti2 = Number(canti2);
	suma2 = suma2 + canti2;
}
if (suma1 > suma2) {
	console.log("El acumulado de la lista uno es mayor que el de la lista 2");
} else if (suma1 < suma2) {
	console.log("El acumulado de la lista dos es mayor que el de la lista 1");
} else {
	console.log("Ambos acumulados son iguales");
}

------------------<<
//Ejercicio #8: Identificando tipo de triangulo
//Realizar un programa que lee la longitud de los 3 lados de un triángulo y analiza qué tipo de triángulo es: 
//no es triángulo, 
//equilátero, 
//isósceles, 
//escaleno, 
//rectángulo
var lado1 = prompt("Ingrese el primer lado");
lado1 = Number(lado1);
var lado2 = prompt("Ingrese el segundo lado");
lado2 = Number(lado2);
var lado3 = prompt("Ingrese el tercer lado");
lado3 = Number(lado3);
if (((lado1 + lado2) > lado3) && ((lado2 + lado3) > lado1) && ((lado3 + lado1) > lado2)) { //se aplica el teorema de desigualdad triangular o desigualdad de Minkowski
	if (lado1 === lado2) {
		if (lado2 === lado3) {
			console.log("El triángulo tiene tres lados iguales, por tanto es EQUILÁTERO");
		} else {
			console.log("Dos de los lados son iguales, por tanto es ISÓSCELES");
			} 
	}	else if (lado1 === lado3) {
			console.log("Dos de los lados son iguales, por tanto es ISÓSCELES");
		} 
		else if (lado2 === lado3) {
			console.log("Dos de los lados son iguales, por tanto es ISÓSCELES");
		} 
		else {
			if (lado1 > lado2) {
				if (lado1 > lado3) {
					var hipotenusa = lado1;
					var a = lado2;
					var b = lado3;
				} else {
					var hipotenusa = lado3;
					var a = lado2;
					var b = lado1;
				}
			} else {
				if (lado2 > lado3) {
					var hipotenusa = lado2;
					var a = lado1;
					var b = lado3;
				} else {
					var hipotenusa = lado3;
					var a = lado2;
					var b = lado1;
				}
			}
			if (hipotenusa*hipotenusa === (a*a) + (b*b)) {
				console.log("Es un triángulo RECTÁNGULO");
			} else {
				console.log("Ninguno de sus lados es igual a otro por tanto es ESCALENO");
			}
		}
} else { 
	console.log("Los lados no forman un triángulo");
}

-------------<<
//Ejercicio #9: Traduciendo palabras
//Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.
//Realizar este ejercicio con la estructura switch
while (palabra != "salir") {
	var palabra = prompt("Ingresa casa ó mesa ó perro ó gato ó salir");
	if (palabra === "casa") {
		alert("La traducción de " + palabra + " al inglés es house")
		console.log("La traducción de " + palabra + " al inglés es house");
	} else if (palabra === "mesa") {
		alert("La traducción de " + palabra + " al inglés es table")
		console.log("La traducción de " + palabra + " al inglés es table");
	} else if (palabra === "perro") {
		alert("La traducción de " + palabra + " al inglés es dog")
		console.log("La traducción de " + palabra + " al inglés es dog");
	} else if (palabra === "gato") {
		alert("La traducción de " + palabra + " al inglés es cat")
		console.log("La traducción de " + palabra + " al inglés es cat");
	} else if (palabra != "salir") {
		alert("Introduzca solo las palabras indicadas")
	}
}


--------------------- <<<
//Ejercicio #10: Censo provincial
/*
Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo. 
De cada una de las personas censadas se tiene la siguiente información: número de documento, edad y sexo ('femenino' o 'masculino') 
Se pide confeccionar un programa que lea los datos de cada persona censada (para finalizar ingresar el valor cero en el número de documento) e informar:
a)Cantidad total de personas censadas. 
b)Cantidad de varones. 
c)Cantidad de mujeres. 
d)Cantidad de varones cuya edad varía entre 16 y 65 años. */


var i = 0; //total de personas
var hm = 0; //hombres
var mj = 0; //mujeres
var hEntre16y65 = 0; //hombres entre 16 y 65 años
do  {
	var numDoc = prompt("Ingrese el número de documento. Para salir ingrese 0");
	numDoc = Number(numDoc);
	if (numDoc !== 0) {
		var edad = prompt("Ingrese edad");
		edad = Number(edad);
		var sex = prompt("Ingrese m si es mujer ó h si es hombre");
		if (sex === "m")	{
			mj++;
			i++;
		} else {
			hm++;
			i++;
			if ((edad >= 16) && (edad <= 65)) {
				hEntre16y65++;
			}
		}
	}
} while(numDoc !== 0)
console.log("Total de mujeres: " + mj);
console.log("Total de hombres: " + hm);
console.log("Del total de hombres, " + hEntre16y65 + " tienen entre 16 y 65 años");
console.log("Total de personas censadas: " + i);
