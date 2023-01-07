// Ejemplo de uso de Hook useState
// Crear un componente de tipo función y acceder a su estado privado atraves de un hook y ademas modificarlo

import React, { useState } from 'react';

const Ejemplo1 = () => {

    const valorIncial = 0;

    const personaInicial = {
        nombre: 'Jose',
        email: 'jose@gmail.com'
    }

    const [contador, setContador] = useState(valorIncial);
    const [persona, setPersona] = useState(personaInicial);

    /** Función para actualizar el estado privado que contiene el contador */

    function incrementaContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);

    }
    /**
     * Función para actualizar el estado de la persona en el componente
     */

    function actualizarPersona() {

        setPersona(
            {
                nombre: 'Any',
                email: 'vargas@gmail.com'
            }
        )

    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/** BLOQUE DE BOTONES PARA ACTUALIZAR EL ESTADO DE COMPONENTE */}
            <button onClick={incrementaContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;


