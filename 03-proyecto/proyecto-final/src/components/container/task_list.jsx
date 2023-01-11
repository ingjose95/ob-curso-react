import React, {  useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {

    
    const defaultTask = new Task('Ejemplo', 'Descripción por defecto', false, LEVELS.NORMAL);
    
    const [tasks, setTasks] = useState([defaultTask]);

    const changeCompleted = (id) => {

        console.log('ToDo: cambiar estado de un tarea')
    }


    return (
        <div>
            <div>
                Tus tareas: 
            </div>
            <TaskComponent task={ defaultTask }></TaskComponent>
            {/* Aplicar un For/Map para renderizar una lista de tarea  */}
        </div>
    );
};


export default TaskListComponent;
