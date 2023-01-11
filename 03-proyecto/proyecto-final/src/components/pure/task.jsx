import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Created Task')

        return () => {
            console.log(`Taks: ${task.name} is going to`)
        };
    }, [task]);
    return (
        <div>
            <h2>Nombre: { task.name }</h2>
            <h2>Descripción: { task.description }</h2>
            <h2>Nivel: { task.level }</h2>
            <h2>La tarea está: {task.completed ? 'COMPLETADA':'PENDIENTE'}</h2>
        </div>
    );
};


TaskComponent.propTypes = {

    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
