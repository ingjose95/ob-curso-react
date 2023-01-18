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


    function completedTask(task) {
        console.log('Completed this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;

        // We update the state of the component with de new list of task and it will update
        // the iteration of the tasks in order to the show the task update

        setTasks(tempTasks);

        
    }

    function deleteTask(task) {

        console.log('Delete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);

    }


    function addTask(task) {

        console.log('Added this task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks)


    }

    return (
        <div>
            <div className='grid-cols-12'>
                <div className='bg-gray-200'>
                    {/* Card Header (title) */}
                    <div className='text-[1.25rem] p-3 bg-gray-400'>
                        <h5>Your Task:</h5>
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
                                            task={task}
                                            complete={completedTask}
                                            remove={deleteTask}>
                                        </TaskComponent>
                                    )
                                } ) }
                            </tbody>
                        </table>
                    </div>
                </div>
                    <TaskForm add={addTask}></TaskForm>
                {/* <TaskComponent task={defaultTask}></TaskComponent> */}

            </div>
        </div>
    );
}

export default TaskListComponent;
