import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Jose');

    function showMessages(text) {
        //El console.log es opcional, solo quería ver cómo sería
        console.log(`Messages received: ${text}`);
        alert(`Messages received: ${text} `)

    }


    function updateName (newName) {
        setName(newName)


    }


    return (
        <div className='bg-slate-500'>
            <Child name={name} send={showMessages} update={updateName} ></Child>
        </div>
    );
}

export default Father;
