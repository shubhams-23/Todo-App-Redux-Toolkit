
import './componentsCss/TodoApp.css'
import { Provider } from 'react-redux';
import { store } from './components/TodoApp-1';
import TodoList from './components/TodoApp-3';


function App() {
  return (
    <Provider store={store}>
      <div>
      <h1>To-Do List Application</h1>
        <TodoList/>
      
      </div>
    </Provider>
  );
}

export default App;