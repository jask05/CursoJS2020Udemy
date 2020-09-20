var persona  = {
   // Propiedades o Atributos
    nombre: 'Pablo',
    apellido: 'González',
    gustos: ['Fútbol', 'Películas', 'Series', 'Videojuegos'],
    trabajo: 'Programador',
    casado: true
};

console.log(persona);
console.log(persona.apellido);
console.log(persona['trabajo']);

// Mutación
persona.casado = false; // Se recomienda hacer desde el propio método.
console.log(persona.casado);