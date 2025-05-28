import { useState } from 'react';

const Controlado = () => {

    // Se crea una referencia al formulario para poder acceder a sus valores
    const [todo, setTodo] = useState({
        title: "Title #01",
        description: "Description #01",
        state: "Pendiente",
        priority: true
    }); // Se crea una referencia al error para poder acceder a su valor. Se puede usar el hook useState, pero en este caso no es necesario ya que no se va a renderizar el componente nuevamente. Se puede usar el hook useState, pero en este caso no es necesario ya que no se va a renderizar el componente nuevamente.
    const handleSubmit = (e) => {
        // Cada vez que se quiere hacer referencia al DOM, se debe usar el hook useRef
        e.preventDefault();
    };
    const handleChange = (e) => {

        const { name, checked, type, value } = e.target; // Se desestructura el objeto e.target para obtener sus propiedades. Se puede usar el operador spread para copiar el objeto todo y luego se asigna el valor del input a la variable title.

        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value // Para acceder al nombre del input se usa el evento e y el target name.
        })
    }

    const { title, description, state, priority } = todo; // Se desestructura el objeto todo para obtener sus propiedades. Se puede usar el operador spread para copiar el objeto todo y luego se asigna el valor del input a la variable title.

    return ( // En los formulario controlados, se debe crear una función para cada uno de los inputs. En este caso no es necesario construir una función para el formulario (Método de carreteo), ya que React transfiere el evento al formulario y no a cada uno de los inputs. Por lo que se puede usar el evento e para obtener los valores de los inputs.
        <form onSubmit={handleSubmit} className='mt-3'>
            <input
                type="text"
                placeholder="ingrese Texto"
                className="form-control mb-2"
                name="title"
                value={title} // Se asigna el valor del input a la variable title
                onChange={handleChange} // Se usa el operador spread para copiar el todo del objeto y luego se asigna el valor del input a la variable title. Se puede usar el operador spread para copiar el objeto todo y luego se asigna el valor del input a la variable title.
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="description"
                value={description}
                onChange={handleChange}
            // onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            />
            <div className='form-check mb-2'>
                <input
                    type="checkbox"
                    name='priority'
                    className='form-check-input'
                    id='inputCheck'
                    checked={priority}
                    onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
        </form>
    )
};

export default Controlado;