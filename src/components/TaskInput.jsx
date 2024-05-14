import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (title.trim() !== '' && description.trim() !== '') {
            dispatch(addTask({ title, description }));
            setTitle('');
            setDescription('');
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                className="w-full mb-2 p-2 border rounded-md"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
                className="w-full h-20 p-2 border rounded-md"
            />
            <button onClick={handleAddTask} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Add Task
            </button>
        </div>
    );
};

export default TaskInput;
