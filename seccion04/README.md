## Sección 4: Sentencias y bucles
31. Introducción.
32. Sentencia if/else.
33. Sentencias lógicas.
34. Operador ternario.
35. Sentencia Switch.
36. Sentencias for.
37. Sentencias while.
38. Sentencias do..while.
39. Valores verdaderos y falsos.
40. Ejercicio de codificación 2.
41. Solución al ejercicio de codificación 2.
42. Código de la sección.

### 33. Sentencias lógicas
![Sentencias lógicas](../recursos/33_01.png)

### 34. Operador ternario
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

### 35. Sentencia Switch
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

### 36. Sentencias For
```javascript
for (var i=0; i<= 10; i++){
   console.log(i);
}
```

### 37. Sentencia while
```javascript
var i = 0;
while (i <= 10){
   console.log(i);
   i++;
}
```

### 38. Sentencia do..while
- Comprueba la condición al **finalizar** el bucle.

```javascript
var i = 12;
do {
   console.log(i);
   i++;

}while(i<= 10)
```