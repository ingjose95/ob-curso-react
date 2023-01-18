import React, { useState, useEffect } from 'react';

const ClockFunction = () => {

    const [persona, setPersona] = useState({

        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellido: 'San José',

    });

    useEffect(() => {
        const timeID = setInterval(() => tick(), 1000)
        return () => clearInterval(timeID);
    }, []);


    const tick = () => {
        setPersona((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }

        })
    }



    return (
        <div>
            <h1>Hora actual: {persona.fecha.toLocaleTimeString()}</h1>
            <h1> {persona.nombre} {persona.apellido} </h1>
            <h2>Edad: {persona.edad}</h2>
        </div>
    );
}

export default ClockFunction;
