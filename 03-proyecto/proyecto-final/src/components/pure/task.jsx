import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { LEVELS } from '../../models/levels.enum';



const TaskComponent = ( {task} ) => {

    function taskLevelBadge() {

        switch(task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='bg-green-100 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='bg-red-100 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='bg-yellow-100 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900'>
                            {task.level}
                        </span>
                    </h6>
                )
            default:
                break;
        }
        
    }


    function taskCompletedIcon() {
        if(task.completed) {
            return (<BsToggleOn className='text-green-900 text-2xl'></BsToggleOn>)
        } else {
            return (<BsToggleOff className='text-red-900 text-2xl'></BsToggleOff>)
        }
    }



    return (

        <tr>
            <th>
                <span className='m-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                <BsTrash className='text-red-700 text-2xl'></BsTrash>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {

    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
