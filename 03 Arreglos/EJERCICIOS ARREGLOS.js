Ejercicio #1: Calculando DNI

El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23.

A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.

El array de letras es:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:

Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())
En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta.
En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.





Ejercicio #2: Añadir elementos a un array con push(Ciclo for)

Crear un array de elementos que contenga nombres y posteriormente agregar más elementos por medio del método “push”





Ejercicio #3: Creando arrays

Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función alert()





Ejercicio #4: Operaciones en arrays

A partir del siguiente array que se proporciona:

var valores = [true, 5, false, "hola", "adios", 2];

Determinar cuál de los dos elementos de texto es mayor
Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos




Ejercicio #5: Suma de números

Hacer un ejercicio que nos pida 10 números y luego que sume esos valores.