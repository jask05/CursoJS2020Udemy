# [JavaScript 2020: Curso desde Principiante hasta Profesional](https://www.udemy.com/course/javascript-moderno-para-principiantes)

# Índice

- **Sección 1: Introducción al curso de JavaScript.**
   1. Bienvenida al curso.
   2. ¿Cómo hacer preguntas?
   3. El editor de código
   4. El navegador y Node.js
   5. Incorporar código JavaScript
   6. Ejecutar JavaScript en la terminal MAC.
   7. Ejecutar JavaScript en la terminal Windows.
   8. Cómo realizar el curso
- **Sección 2: Fundamentos de Programación en JavaScript**
   9. Introducción
   10. ¿Qué es Javascript?
   11. Notas sobre JavaScript
   12. Variables y tipos de datos.
   13. Reglas en el uso de variables.
   14. Comentarios en el código.
   15. Conversión de variables.
   16. Mutación de variables.
   17. Operadores matemáticos.
   18. Operadores Lógicos.
   19. Operador typeof
   20. Operadores de incremento y decremento


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
 
```

# Bibliografía
- [Instalación de NodeJS y NVM en WSL](https://docs.microsoft.com/es-es/windows/nodejs/setup-on-wsl2)