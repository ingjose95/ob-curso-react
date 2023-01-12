import React, { useState } from 'react';

// Definiendo estilos en constantes

// ? Estilo para usuario logueado
const loggedStyle = {

}

// ? Estilo para usuario no logueado

const unLoggedStyle = {

    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {


    const [logged, setLogged] = useState(false);

    const greetingUser = ( <p>Hola, {props.name}</p> )

    const pleaseLogin = () => ( <p>Please, login</p>)
    
    return (
        <div style={ logged ? loggedStyle : unLoggedStyle}>
            { logged ?
                greetingUser
                :
                pleaseLogin}



            <button onClick={ () => {
                console.log('Botón pulsado');
                setLogged(!logged)
            } }> { logged ? 'Logout' : 'Login' } </button>
            
        </div>
    );
}

export default GreetingStyled;
