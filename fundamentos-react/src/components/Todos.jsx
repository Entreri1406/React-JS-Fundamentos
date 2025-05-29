import Todo from './Todo';

const Todos = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className="mt-5">
            <h2 className="text-center">Registro de información</h2>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}
            {
                todos.length === 0 && (<div className="alert alert-info d-none d-lg-block">No hay actividades para mostrar</div>)
            }
        </div>
    )
};

export default Todos;