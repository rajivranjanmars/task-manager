import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [localTasks, setLocalTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setLocalTasks(storedTasks);
    }, []);

    const handleRemoveTask = (taskId) => {
        dispatch(removeTask(taskId));
        updateLocalTasks(taskId, true); // Remove task from local storage
    };

    const handleToggleTask = (taskId) => {
        const taskToUpdate = localTasks.find((task) => task.id === taskId);
        if (taskToUpdate) {
            dispatch(toggleTask(taskId));
            updateLocalTasks(taskId); // Update task completion in local storage
        }
    };


    const updateLocalTasks = (taskId, remove = false) => {
        let updatedLocalTasks = [...localTasks];
        const taskIndex = updatedLocalTasks.findIndex((task) => task.id === taskId);

        if (taskIndex !== -1) {
            if (remove) {
                updatedLocalTasks.splice(taskIndex, 1); // Remove task from local tasks
            } else {
                updatedLocalTasks[taskIndex].completed = !updatedLocalTasks[taskIndex].completed; // Toggle completion status
            }
            localStorage.setItem('tasks', JSON.stringify(updatedLocalTasks));
            setLocalTasks(updatedLocalTasks);
        }
    };


    return (
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {tasks.map((task) => (
                <div key={task.id} className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                    <label htmlFor={`toggle-${task.id}`} className="flex items-center cursor-pointer">
                        <input
                            id={`toggle-${task.id}`}
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-500"
                            checked={task.completed}
                            onChange={() => handleToggleTask(task.id)}
                        />
                        <span className="ml-2 text-sm">Completed</span>
                    </label>
                    <button
                        onClick={() => handleRemoveTask(task.id)}
                        className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
