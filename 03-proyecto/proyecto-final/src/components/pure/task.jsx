import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.css'

// Se debe importar la hoja de estilo de CSS de task
const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Created Task')

        return () => {
            console.log(`Taks: ${task.name} is going to`)
        };
    }, [task]);
    return (
        <div>
            <h2 className='task-name'>Nombre: { task.name }</h2>
            <h2 className='task-name'>Descripción: { task.description }</h2>
            <h2 className='task-name'>Nivel: { task.level }</h2>
            <h2 className='task-name'>La tarea está: {task.completed ? 'COMPLETADA':'PENDIENTE'}</h2>
        </div>
    );
};


TaskComponent.propTypes = {

    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
