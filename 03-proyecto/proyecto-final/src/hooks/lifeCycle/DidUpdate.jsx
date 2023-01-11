/**
 * Ejemplo de uso de metodo componentDidUpdate en componente clase
 * y uso de hook en compoenente funcional
 */


import React, { Component, useEffect } from 'react'

export default class DidUpdate extends Component {

    componentDidUpdate() {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado")
    }

    render() {
        return (
            <div>DidUpdate</div>
        )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {

        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado")

    });
    return (
        <div>
            <h1>Did Update</h1>
        </div>
    );
}


