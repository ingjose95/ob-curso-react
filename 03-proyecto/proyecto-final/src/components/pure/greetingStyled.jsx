import React, { useState } from 'react';


// ? Estilo para usuario logueado

const loggedStyle = {

    color: 'blue'
}

// ? Estilo para usuario no logueado

const unloggedStyled = {

    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, {props.name}</p>)

    const pleaseLogin = () => (<p>Por favor, {props.name}, registrate</p>)


    return (
        <div style={ logged ? loggedStyle : unloggedStyled }>
            { logged ? greetingUser() : pleaseLogin() }
            <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 m-5 border border-gray-400 rounded shadow' onClick={ () => {
                console.log('Botón pulsado');
                setLogged(!logged);
            } }> { logged ? 'Logout' : 'Login' }</button>
            
        </div>
    );
}

export default GreetingStyled;
