/**
 * Componente que va a contener un formulario para autenticacion de usuarios
 */


import React, { useState } from 'react';

const LoginForm = () => {

    const InitialCredentials = [
        {
            user: '',
            password: '' 
        }
    ]

    const [credentials, setCedentials] = useState(InitialCredentials);
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
