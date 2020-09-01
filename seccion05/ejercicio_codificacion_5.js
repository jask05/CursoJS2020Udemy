/****************************************************************
 * Ejercicio 4
 * 
 * Implementar una función que nos permita evaluar el porcentaje
 * de respuestas positivas y negativas en un examen.
 * La función debe recibir el nombre, y la cantidad de respuestas 
 * positicas y negativas.
 * 
 * La función debe calcular el porcentaje que representa cada tipo
 * de respuesta, en base a 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(> 90%), B(70%-89%), C(45%-69%), D(<45%)
 */

var notaFinal = function (nombre, respuestasPositivas){
    var nota;
    var respuestasNegativas = 100 - respuestasPositivas;
    if(respuestasPositivas >= 90){
        nota = 'A';
    }else if((respuestasPositivas >= 70) && (respuestasPositivas <= 89)){
        nota = 'B';
    }else if((respuestasPositivas >= 45) && (respuestasPositivas <= 69)){
        nota = 'C';
    }else if(respuestasPositivas < 45){
        nota = 'D';
    }
    return `El alumno '${nombre}' tiene la nota de: '${nota}'. \nEl porcentaje de respuestas positivas es del ${respuestasPositivas}% y el de respuestas negativas es del ${respuestasNegativas}%.`;
}

var calculaNota = notaFinal('Jask', 45);
console.log(calculaNota);