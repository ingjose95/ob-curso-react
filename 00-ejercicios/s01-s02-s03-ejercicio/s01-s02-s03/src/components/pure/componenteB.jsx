import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ComponenteB = ({ dato }) => {
    return (
        <div>
        
            <h3>Nombre: {dato.nombre}</h3>
            <h3>Apellido: {dato.apellido}</h3>
            <h3>Email: {dato.email}</h3>
            <h3>En linea: {dato.estaEnLinea}</h3>
            
        </div>
    );
};


ComponenteB.propTypes = {

    dato: PropTypes.instanceOf(Contacto)

};


export default ComponenteB;
