import React from 'react';
import { Provider } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Header from './components/Header'; // Import Header component
import store from './redux/store';
import 'tailwindcss/tailwind.css';

function App() {
  // useEffect and other code as before

  return (
    <Provider store={store}>
      <div className="App">
        <Header /> {/* Include Header component */}
        <div className="container mx-auto p-4">
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
