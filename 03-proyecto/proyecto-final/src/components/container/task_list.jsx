import React, {  useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.css'

// Importamos las hoja de estilo de task.css



const TaskListComponent = () => {

    
    const defaultTask = new Task('Ejemplo', 'Descripción por defecto', false, LEVELS.NORMAL);
    
    const [tasks, setTasks] = useState([defaultTask]);

    const changeCompleted = (id) => {

        console.log('ToDo: cambiar estado de un tarea')
    }


    return (
        <div>
            <div>
                <h1>Tus tareas:</h1> 
            </div>
            <TaskComponent task={ defaultTask }></TaskComponent>
            {/* Aplicar un For/Map para renderizar una lista de tarea  */}
        </div>
    );
};


export default TaskListComponent;
