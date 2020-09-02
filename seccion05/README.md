## Sección 5: Funciones en JavaScript
43. Introducción.
44. Creando nuestra primera función.
45. Argumentos en las funciones.
46. Ejemplo: función convierte Fahrenheit a Celsius.
47. Ejemplo: función calcular edad.
48. Ejercicio de codificación 3.
49. Solución al ejercicio de codificación 3.
50. Funciones como expresiones.
51. Argumentos no definidos (undefined).
52. Argumentos Nulos (Nulls).
53. Argumentos por defecto.
54. Plantillas de textos (Template strings).
55. Ejercicio de codificación 4.
56. Solución ejercicio codificación 4.
57. Código de la sección.

### 44. Creando nuestra primera función
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

### 45. Argumentos en las funciones
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

### 46. Ejemplo: función convierte Fahrenheit a Celsius
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
### 47. Ejemplo: función calcular edad
```javascript
function calcularEdad(anio){
   return 2020 - anio;
}

var edad = calcularEdad(1990); // 30
```

### 50. Funciones como expresiones
```javascript
var prueba = function(nombre){
   return 'Hola ' + nombre;
}

console.log(prueba('Jask'));
```
### 51. Argumentos no definidos (undefined)
- El compilador separa un espacio en la memoria, tiene un puntero hacia la dirección de memoria pero no tiene ningún valor.
```javascript
var nombre; // = 'Jask';
var prueba = function(n){
   return 'Hola ' + n;
}

console.log(prueba(nombre));
```

### 52. Argumentos Nulos (Nulls)
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

### 53. Argumentos por defecto
```javascript
var sumar = function(a, b, c = 3){
   return a + b + c;
}

console.log(sumar(10,4)); // 17
```

### 54. Plantillas de textos (Template strings)
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