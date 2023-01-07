/**
 * Ejemplo de hHooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */



const miContexto = React.createContext(null)

const Componente1 = () => {

    //Inicializamos un estado vacio que va a rellenarse con
    //los datos del contexto del padre

    const state = useContext(miContexto)

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            {/**Pintamos el Componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}



const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.session}
            </h2>
        </div>
    );
}



export default function MiComponenteConContexto() {

    const estadoInicial = {

        token: '1234567',
        session: 1
    }

    // Creamos el estado del componente

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {

        setSessionData(
            {
                token: 'JUSASASOOS900',
                session: sessionData.session + 1
            }
        )
    }
    return (


        <miContexto.Provider value={sessionData}>{/* Todo lo que está
        qaqui dentro puede leer los datos de sessionData*}
        {/* Ademas si se actualiza, los componentes aqui, tambien se sactualizan*/}
            <h1>*** Ejemplo de useState y useContext ***</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    )
}


