/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado privado a través de un Hook y además, poder modificarlo.
 */


import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Definimos un valor inicial para el contador

    const valorInicial = 0;

    // Valor inicial para la persona

    const personaInicial = {

        nombre: 'Jose',
        email: 'melendz.@gmail.com'

    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);


    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */

    function incrementarContador(){
        // ? FuncionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }


    function actualizarPersona() {

        setPersona(
            {
                nombre: 'Lila',
                email: 'li@gmail.com',
            }
            )
    }


    return (
        <div>
            <h4>Contador: {contador}</h4>
            <h4>Nombre: {persona.nombre}</h4>
            <h4>Email: {persona.email}</h4>
            <button onClick={incrementarContador}>Incrementar número</button>
            <button onClick={actualizarPersona}>Cambiar persona</button>
        </div>
    );
}

export default Ejemplo1;
