import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskForm = ( {add} ) => {


    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);


    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(

            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,

        );
        add(newTask)
    }



    return (

        <div className='w-full max-w-xs'>
            <form onSubmit={addTask} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <input ref={nameRef} id='inputName' type='text' className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' required placeholder='TaskName'></input>

                    <input ref={descriptionRef} id='inputName' type='text' className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' required placeholder='TaskDescription'></input>

                    <label htmlFor='selectLevel' className='sr-only'>Priority</label>

                    <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                        <option value={LEVELS.NORMAL}>
                            Normal
                        </option>
                        <option value={LEVELS.URGENT}>
                            Urgent
                        </option>
                        <option value={LEVELS.BLOCKING}>
                            Blocking
                        </option>
                    </select>
                </div>
                <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Add</button>
                
            </form>
        </div>
    );
}

TaskForm.protoTypes = {

    add: PropTypes.func.isRequired,
} 

export default TaskForm;
