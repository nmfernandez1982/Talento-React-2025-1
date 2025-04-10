


// const persona =
// {
//     "nombre":"Nicolas",
//     "apellido":"Fernandez",
//     "Localidad":"Lanus",
//     "esEstudiante":false,
// }

// console.log(persona);

//objeto
const persona=
{
    nombre:"Nicolas",
    edad:43,
    ciudad:"Lanus",

    saludar()
    {
        return `Hola, soy ${this.nombre}`;
    }
}

console.log(persona.nombre);
console.log(persona.saludar());

const jsonPersona=JSON.stringify(persona);

console.log(jsonPersona);

//
