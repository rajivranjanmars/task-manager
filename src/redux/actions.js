// Action Types
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_TASKS = 'SET_TASKS';

// Action Creators
export const addTask = ({ title, description }) => ({
    type: ADD_TASK,
    payload: {
        id: new Date().getTime(), // Unique task ID
        title,
        description,
    },
});

export const removeTask = (taskId) => ({
    type: REMOVE_TASK,
    payload: taskId,
});
export const toggleTask = (taskId) => ({
    type: TOGGLE_TASK,
    payload: taskId,
});

export const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks,
});
