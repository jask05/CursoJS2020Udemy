var persona  = {
    // Propiedades o Atributos
    nombre: 'Ramiro',
    apellido: 'González',
    gustos: ['Fútbol', 'Películas', 'Series', 'Videojuegos'],
    trabajo: 'Programador',
    casado: true,
    anioNacimiento: 1920,
    
     // Métodos
    calcularEdad: function(){
        return 2020 - this.anioNacimiento; // Utiliza el año de nacimiento dentro de la propiedad anioNacimiento
    }
};

console.log(persona);
var edad = persona.calcularEdad();
console.log(edad);