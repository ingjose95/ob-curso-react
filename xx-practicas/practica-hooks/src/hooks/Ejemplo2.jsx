/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */


import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setcontador2] = useState(0);


    const miRef = useRef();


    function incrementarContador1() {
        setContador1(contador1 + 1);
    }

    function incrementarContador2() {
        setcontador2(contador2 + 1);
    }
    /**
     * ? Caso 1: Ejecutar siempre un pedazo de código
     * Cada vez que hay un cambio en el componente se ejecuta aquello que esté dentro del useEffect()
     */


    // useEffect(() => {

    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando referencia a el elemento del DOM');
    //     console.log(miRef);
    // });

    /**
     * ? Ejecutar solo cuando cambie el contador 1
     * Cada vez que haya un cambio en el contador 1, se ejecuta el cambio en el useEffect
     * En caso de que cambie el contador 2, no pasa nada.
     */

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando referencia a el elemento del DOM');
    //     console.log(miRef);
        
    // }, [contador1]);

    /**
     * ? Caso 2: ejecutar solo cuando se cambie el CONTADOR1 o CONTADOR2
     * 
     */


    useEffect(() => {
        console.log('Cambio en el estado del componente');
        console.log('Mostrando referencia a el elemento del DOM');
        console.log(miRef);

    }, [contador1, contador2]);


    return (
        <div>
            <p ref={miRef}>
                Ejemplo de elemento referenciado
            </p>
            <h4>Contador 1: {contador1}</h4>
            <h4>Contador 2: {contador2}</h4>
            <button onClick={incrementarContador1}>Incrementar Contador 1</button>
            <button onClick={incrementarContador2}>Incrementar Contador 2</button>
            {/* Elemento referenciado */}
        </div>
    );
}

export default Ejemplo2;
