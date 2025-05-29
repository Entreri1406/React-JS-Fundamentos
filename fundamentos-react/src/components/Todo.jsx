
const todo = ({ todo, deleteTodo, updateTodo }) => {

    const { id, title, description, state, priority } = todo; // Desestructuración del objeto todo para obtener sus propiedades

    return (
        <>
            <div className="container text-center mt-3" key={id}>
                <div className="row border rounded p-3 bg-light">
                    <div className="col-12 d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                        <h3 className={(state && 'text-decoration-line-through').toString()}>{title}</h3>
                        <span className="badge text-bg-primary">{priority && 'Prioritario'}</span>
                    </div>
                    <div className={"col-12 text-start " + (state && 'text-decoration-line-through').toString()}>
                        <p>{description}</p>
                    </div>
                    <div className="col-12 d-flex justify-content-start gap-2">
                        <button className="btn btn-sm btn-warning" onClick={() => updateTodo(id)}>Actualizar</button>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(id)}>Eliminar</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default todo;