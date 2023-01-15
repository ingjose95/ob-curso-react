import React, { useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';




const TaskListComponent = () => {

    const defaultTask1 = new Task('Ejemplo1', 'Descripción por defecto1', false, LEVELS.NORMAL);

    const defaultTask2 = new Task('Ejemplo2', 'Descripción por defecto2', true, LEVELS.URGENT);

    const defaultTask3 = new Task('Ejemplo3', 'Descripción por defecto3', false, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    return (
        <div>
            <div className='grid-cols-12'>
                <div className=''>
                    {/* Card Header (title) */}
                    <div className='p-3'>
                        <h5>Tus tareas son:</h5>
                    </div>
                    {/* Card Body (Content) */}
                    <div className='relative h-96' data-mdb-perfect-scrollbar='true'>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key={index} 
                                            task={task}>
                                        </TaskComponent>
                                    )
                                } ) }
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
                {/* <TaskComponent task={defaultTask}></TaskComponent> */}

            </div>
        </div>
    );
}

export default TaskListComponent;
