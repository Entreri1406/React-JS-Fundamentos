import Controlado from './components/Controlado.jsx'; // Importar un componente de otro archivo
import Todos from './components/Todos.jsx'; // Importar otro componente de otro archivo
import { useState } from 'react';

// import { useState } from 'react'; // Importar el hook useState de React

const initialState = [
    {
        id: 1,
        title: "Actividad #01",
        description: "Descripción de la actividad #01",
        state: "Pendiente",
        priority: true
    },

    {
        id: 2,
        title: "Actividad #02",
        description: "Descripción de la actividad #02",
        state: "Completado",
        priority: false
    }
]

const App = () => {

    const [todos, setTodos] = useState(initialState);

    const addTodo = todo => {
        setTodos([...todos, todo])
    }

    const deleteTodo = id => {
        const newArray = todos.filter(todo => todo.id !== id)
        setTodos(newArray);
    }

    const updateTodo = id => {
        const newArray = todos.map(todo => {
            if (todo.id === id) {
                todo.state = !todo.state;
            }
            return todo
        })
        setTodos(newArray);
    }

    const orderTodo = arrayTodos => {
        return arrayTodos.sort((a, b) => {
            if (a.priority === b.priority) return 0;
            if (a.priority) return -1;
            if (!a.priority) return 1;
        })
    }

    return (
        <>
            <div className="container">
                <h1 className='text-center mt-2'>To-Do App</h1>
                <h3>Ingrese la actividad:</h3>
                <Controlado addTodo={addTodo} />
                <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            </div>
        </>
    );
}
export default App;