/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext} from 'react';



/**
 * 
 * @returns Compoente 1
 * Dispone de un contexto que va a tener  un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {


    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                El token es:{state.token}
            </h2>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)



    return (
        <div>
        <h2>
            La sesión es: {state.sesion}
        </h2>

        </div>
    );
}


export default function ComponenteConContexto() {

    const estadoInicial = {

        token: '1234567',
        sesion: 1,
    }

    // Creamos el estado del componente

    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion() {

        setSesionData(
            {
                token: '12eedasdasd332',
                sesion: sesionData.sesion + 1,
            }
        )
    }

    return (
    
        <miContexto.Provider value={sesionData}>
            <Componente1>
            </Componente1>
            <button onClick={actualizarSesion}>Actualizar sesión</button>
    
        </miContexto.Provider>
    )
}

