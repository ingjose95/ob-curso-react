import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';




const TaskListComponent = () => {

    const defaultTask = new Task('Ejemplo', 'Descripción por defecto', false, LEVELS.NORMAL);

    return (
        <div>
            <div>
                <h1 className='text-red-500'>Tus tareas son:</h1>
                <TaskComponent task={defaultTask}></TaskComponent>
            </div>
        </div>
    );
}

export default TaskListComponent;
