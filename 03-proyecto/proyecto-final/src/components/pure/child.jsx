import React, { useRef } from 'react';

const Child = ( { name, send, update } ) => {

    const messageRef = useRef('');
    const nameRef = useRef('');
    

    function pressButton() {
        const text = messageRef.current.value;
        alert(`Default text: ${text}`)
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value)

    }

    return (
        <div className='bg-slate-200'>
            <p className='text-xl border-b' onMouseOver={ () => console.log('On Mouse Over')}>Hello, {name}</p>
            <div className='flex gap-x-5 place-content-center'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={ () => console.log('Botón 1 pulsado!') }>Botón 1</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={pressButton} >Botón 2</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={ () => pressButtonParams('Hello, world!')}>Botón 3</button>
                <input 
                    placeholder='Send a text to your father' 
                    onFocus={() => console.log('Input Focused')} onChange={(e) => console.log(`Input changed:`, e.target.value)} 
                    onCopy={(c) => console.log(`Copied text from Input:`, c.target.value )}
                    ref={messageRef}>
                </input>
                <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={ ()=> send(messageRef.current.value)}>Send messages</button>
            </div>
            <div>
                <form onSubmit={submitName}>
                    <input
                        placeholder='New Name'
                        ref={nameRef}>
                    </input>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
