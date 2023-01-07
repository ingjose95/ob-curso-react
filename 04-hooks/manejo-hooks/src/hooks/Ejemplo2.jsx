/**
 * Ejemplos de uso:
 * - useState()
 * useRef()
 * useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';


    const Ejemplo2 = () => {
        
        const [contador1, setContador1] = useState(0);
        const [contador2, setContador2] = useState(0);
    
        const miRef = useRef();
    
        function incrementarContador1() {
            setContador1(contador1 + 1);
        }
    
        function incrementarContador2() {
            setContador2(contador2 + 1);
        }

        /**
         * Trabajando con useEffect:
         */

        /**
         * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
         * Cada vez que haya un cambio en el estado del componente
         * Se ejecuta aquello que esta dentro del useEffect
         */
        // useEffect(() => {
        //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
        //     console.log('Mostrando referencia al elemento del DOM')
        //     console.log(miRef)
            
        // })


        /**
         * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
         * Cada vez que haya un cambio de contador 1, se ejecuta lo que diga el useEffect()
         * En caso de que cambie contador2, no habrá ejecución
         */

        useEffect(() => {

            console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
            console.log('Mostrando referencia al elemento del DOM');
            console.log(miRef);

        }, [contador1, contador2]);
        



        return (
        <div>
            <h1>** Ejemplo de useState(), useRef() y useEffect() **</h1>
            <h1>Contador 1: {contador1}</h1>
            <h1>Contador 2: {contador2}</h1>
            <button onClick={incrementarContador1}>Aumentar contador 1</button>
            <button onClick={incrementarContador2}>Aumentar contador 2</button>
            {/*Elemento referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
        </div>
    );
}

export default Ejemplo2;

