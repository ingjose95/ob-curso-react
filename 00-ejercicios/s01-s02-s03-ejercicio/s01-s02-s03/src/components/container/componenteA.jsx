import React from 'react';
import { Contacto } from '../../models/contacto.class';
import { ESTADO } from '../../models/estado';
import ComponenteB from '../pure/componenteB';



const ComponenteA = () => {

    const persona = new Contacto('Jose', 'Melendez', 'ing.1995xxxxx@gmail.com', ESTADO.DESCONECTADO)

    return (
        <div>
            <h1>Tu estado es el siguiente:</h1>
            <ComponenteB dato={ persona }></ComponenteB>
        </div>
    );
};

export default ComponenteA;
