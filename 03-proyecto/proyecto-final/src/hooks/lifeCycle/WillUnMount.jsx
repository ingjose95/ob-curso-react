/**
 * Ejemplo de uso del método componenteWillUnMount para componentes clase
 * Ejemplo de ueso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export default class WillUnMount extends Component {

    componentWillUnmount() {

        console.log('Comportamiento antes de que el componente desaparezca')
    }
    render() {
        return (
            <div>WillUnMount</div>
        )
    }
}




export const WillUnMountHook = () => {

    useEffect(() => {
        // aqui no iría nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);
    return (
        <div>

        </div>
    );
}


