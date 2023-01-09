/**
 * Ejemplo para entender los uso de props.children
 */

import React from 'react'

export default function Ejemplo4(props) {
    return (
    <div>
        <h1>Ejemplo de Children Props</h1>
        <h2>
            Nombre: {props.nombre}
        </h2>
        {/* Props.children pintara por defecto
        aquello que se encuentre entre las etiquetas de apertura y cierre
        de este componente desde el componente de orden superior*/}
        {props.children}
    </div>
    )
}
