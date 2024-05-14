import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, SET_TASKS } from './actions';

// Initial state structure for tasks
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [], 
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTaskList = [...state.tasks, action.payload];
            localStorage.setItem('tasks', JSON.stringify(newTaskList));
            return {
                ...state,
                tasks: newTaskList,
            };
        case REMOVE_TASK:
            const updatedTaskList = state.tasks.filter((task) => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
            return {
                ...state,
                tasks: updatedTaskList,
            };
        case TOGGLE_TASK:
            const updatedTasks = state.tasks.map((task) =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks,
            };
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
