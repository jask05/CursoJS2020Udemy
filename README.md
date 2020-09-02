# [JavaScript 2020: Curso desde Principiante hasta Profesional](https://www.udemy.com/course/javascript-moderno-para-principiantes)

# Índice

- **Sección 1: Introducción al curso de JavaScript.**
   - 1.1. Bienvenida al curso.
   - 1.2. ¿Cómo hacer preguntas?
   - 1.3. El editor de código
   - 1.4. El navegador y Node.js
   - 1.5. Incorporar código JavaScript
   - 1.6. Ejecutar JavaScript en la terminal MAC.
   - 1.7. Ejecutar JavaScript en la terminal Windows.
   - 1.8. Cómo realizar el curso

- **Sección 2: Fundamentos de Programación en JavaScript**
   
   - 2.1. Introducción
   - 2.2.  ¿Qué es Javascript?
   - 2.3.  Notas sobre JavaScript.
   - 2.4.  Variables y tipos de datos.
   - 2.5.  Reglas en el uso de variables.
   - 2.6.  Comentarios en el código.
   - 2.7.  Conversión de variables.
   - 2.8.  Mutación de variables.
   - 2.9.  Operadores matemáticos.
   - 2.10. Operadores Lógicos.
   - 2.11. Operador typeof.
   - 2.12. Operadores de incremento y decremento.
   - 2.13. Operadores de asignación.
   - 2.14. Conoce más sobre los Operadores en JavaScript.
   - 2.15. Ejercicio de codificación 1.
   - 2.16. Solución al ejercicio de codificación 1.
   - 2.17. La consola.
   - 2.18. Recursos.
  
- **Sección 3: HTML5 y CSS3**
   - 3.1.  Introducción.
   - 3.2.  Estructura de una página HTML5.
   - 3.3.  Etiquetas.
   - 3.4.  CSS.
  
- **Sección 4: Sentencias y bucles**
   - 4.1.  Introducción.
   - 4.2.  Sentencia if/else.
   - 4.3.  Sentencias lógicas.
   - 4.4.  Operador ternario.
   - 4.5.  Sentencia Switch.
   - 4.6.  Sentencias for.
   - 4.7.  Sentencias while.
   - 4.8.  Sentencias do..while.
   - 4.9.  Valores verdaderos y falsos.
   - 4.10. Ejercicio de codificación 2.
   - 4.11. Solución al ejercicio de codificación 2.
   - 4.12. Código de la sección.
  
- **Sección 5: Funciones en JavaScript**
   - 5.1.  Introducción.
   - 5.2.  Creando nuestra primera función.
   - 5.3.  Argumentos en las funciones.
   - 5.4.  Ejemplo: función convierte Fahrenheit a Celsius.
   - 5.5.  Ejemplo: función calcular edad.
   - 5.6.  Ejercicio de codificación 3.
   - 5.7.  Solución al ejercicio de codificación 3.
   - 5.8.  Funciones como expresiones.
   - 5.9.  Argumentos no definidos (undefined).
   - 5.10. Argumentos Nulos (Nulls).
   - 5.11. Argumentos por defecto.
   - 5.12. Plantillas de textos (Template strings).
   - 5.13. Ejercicio de codificación 4.
   - 5.14. Solución ejercicio codificación 4.
   - 5.15. Código de la sección.

- **Sección 6: Arreglos y Objetos**
   - 6.1.  Introducción.
   - 6.2.  ¿Qué es un Arreglo?
   - 6.3.  Declaración de arreglos en JavaScript.
   - 6.4.  Operaciones con arreglos.

---

## 4. El navegador y Node.js
Instalación de NodeJS y NVM en Ubuntu WSL
```bash
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash # Instala NVM
nvm --version # Comprobar la versión instalada
nvm install node # Instala Node
```

## 12. Variables y tipos de datos.
![Variables y tipos de datos](recursos/12_01.png)
```javascript
var primerNombre = 'Jask';
var edad = '20';
var sueldo = 2019.12;
var tieneTrabajo = true;
var indefinida;
tieneTrabajo = null; // Reasignando valor a la variable "tieneTrabajo"
```

## 13. Reglas en el uso de variables.
- **Buena práctica**: siempre empezar con **minúsculas** las variables, y si es un nombre compuesto, la siguiente palabra empieza con mayúsculas. Ejemplo: **primerNombre**.
- Existen **palabras reservadas** del propio lenguaje, como *function*, *if*, *while*, etc.
- No se pueden definir números ni símbolos al comienzo de una variable, a **excepción** con dolar ($) o guión bajo (_).

## 14. Comentarios en el código.
```javascript
// Esto es un comentario de una sola línea
/*
Esto es un 
comentario de
varias líneas
*/
```

 ## 15. Conversión de variables.
 ```javascript
var primerNombre, edad, sexo; // Declaración de 3 variables en una sola línea.
primerNombre = 'Jask';
sexo = 'indefinido';
```

## 18. Operadores Lógicos
```javascript
var edad01 = 20;
var edad02 = 18;
var edad03 = 20;
var mayorQue = edad01 > edad02; // True 
var menorQue = edad01 < edad02; // False
var igualdad = edad01 == edad03; // True
```
## 19. Operador typeof
- Devuelve el tipo de variable que se le está pasando al operador.
- **NO** es una función, por eso no se utilizan paréntesis.
```javascript
typeof edad01; // Number
typeof 'Esto es un texto'; // String
```

## 20. Operadores de incremento y decremento
- Aumenta o disminuye en 1 el valor numérico de una varibale.
  - **Incremento**: ++
  - **Decremento**: --
  
```javascript
var edad01 = 20;
var edad02 = 11;

edad01++; // Equivale a 21
edad02--; // Equivale a 10 
```
## 33. Sentencias lógicas
![Sentencias lógicas](recursos/33_01.png)

## 34. Operador ternario
```javascript
// Operadores ternario
var nombre = 'Jask';
var edad = 19;

edad >= 18 ? console.log('Es mayor de edad') : console.log('No es mayor de edad');
// Es lo mismo que
if(edad >= 18) {
   console.log('Es mayor de edad'); 
}else{
   console.log('No es mayor de edad');
} 
```

## 35. Sentencia Switch
```javascript
// Sentencia switch
var mes = 3;
switch(mes){
   case 1:
      console.log('Enero');
      break;
   case 2:
      console.log('Febrero');
      break;
   case 3:
      console.log('Marzo');
      break;
   default:
      console.log('El mes no existe');
}
```

## 36. Sentencias For
```javascript
for (var i=0; i<= 10; i++){
   console.log(i);
}
```

## 37. Sentencia while
```javascript
var i = 0;
while (i <= 10){
   console.log(i);
   i++;
}
```

## 38. Sentencia do..while
- Comprueba la condición al **finalizar** el bucle.

```javascript
var i = 12;
do {
   console.log(i);
   i++;

}while(i<= 10)
```

## 44. Creando nuestra primera función
- **Functión**: operación que va a devolver un resultado.
```javascript
function bienvenido(){
   console.log('Bienvenido');
}

bienvenido();

function bienvenido2(){
   return 'Bienvenido de nuevo';
}

var mensaje = bienvenido2();
console.log(mensaje);
```

## 45. Argumentos en las funciones
- Partes de una función
  - Parámetros: entradas
  - Código
  - Salida

```javascript
function cuadradoNumero(num){
   var resultado = num * num;
   return resultado;
}

var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(5));
```

## 46. Ejemplo: función convierte Fahrenheit a Celsius
```javascript
function convertirFAHaCelcius(gradoFah){
   var celsius = (gradoFah - 32) *  5 / 9;
   return celsius;
}

var temp1 = convertirFAHaCelcius(32); 
console.log(temp1); // 0ºC
var temp2 = convertirFAHaCelcius(68); 
console.log(temp2); // 20ºC
```
## 47. Ejemplo: función calcular edad
```javascript
function calcularEdad(anio){
   return 2020 - anio;
}

var edad = calcularEdad(1990); // 30
```

## 50. Funciones como expresiones
```javascript
var prueba = function(nombre){
   return 'Hola ' + nombre;
}

console.log(prueba('Jask'));
```
## 51. Argumentos no definidos (undefined)
- El compilador separa un espacio en la memoria, tiene un puntero hacia la dirección de memoria pero no tiene ningún valor.
```javascript
var nombre; // = 'Jask';
var prueba = function(n){
   return 'Hola ' + n;
}

console.log(prueba(nombre));
```

## 52. Argumentos Nulos (Nulls)
- La variable apunta a un espacio de memoria pero con un valor **nulo**.
- Puede usarse en un **IF**.
```javascript
var a 
a = null; 
var valorNulo = function(a) {
   return a
}

console.log(valorNulo(a));
```

## 53. Argumentos por defecto
```javascript
var sumar = function(a, b, c = 3){
   return a + b + c;
}

console.log(sumar(10,4)); // 17
```

## 54. Plantillas de textos (Template strings)
- Concatena partes de una cadena con una expresión.
- Utiliza el símbolo del dolar al comienzo de la variable. Esta va entre llaves. 
- Utiliza tildes invertidas al comienzo del string.

```javascript
var nombre = 'Jask';
console.log(`El nombre es ${nombre}`)

var a = 5;
var b = 10;
console.log('La suma es: ' + (a+b));
console.log(`La suma es: ${a + b}`);
```

## 59. ¿Qué es un Arreglo?
![Arreglos - Arrays](recursos/59_01.png)

## 60. Declaración de arreglos en JavaScript
```javascript
var nombres = ['Jask', 'Menéame', 'Feedly', 'Genbeta'];
var vegetales = new Array('Tomate', 'Canónigos', 'Lechuga', 'Zanahorias');

console.log(nombres[0])
console.log(nombres.length)
console.log(vegetales[2])
```
## 61. Operaciones con arreglos
```javascript
var frutas = ['pera', 'manzana', 'plátano', 'kiwi']
console.log(frutas);

// Recorrer arreglos
for (i=0; i<= frutas.length - 1; i++) {
   console.log(frutas[i]);
}

// La mejor forma de iterar
frutas.forEach(function (elemento, indice, array){
   console.log(elemento, indice);
})

// Añade elemento al final del array
frutas.push('naranja');

// Añade elemento al compienzo del array
frutas.ushift('fresa');

// Elimina elemento del final del array
frutas.pop();

// Elimina elemento del comienzo de larray
frutas.shift();

// Posición del elemento dentro del array
frutas.indexOf('plátano');

// Eliminar elementos del array en cualquier posición
frutas.splice(1,2); // Elimina la posición 1 y la 2
```

# Bibliografía
- [Instalación de NodeJS y NVM en WSL](https://docs.microsoft.com/es-es/windows/nodejs/setup-on-wsl2)
- [Expresiones y operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [Funciones anónimas](https://riptutorial.com/es/javascript/example/726/funcion-anonima)
- [Funciones como variables](https://riptutorial.com/es/javascript/example/716/funciones-como-variable)