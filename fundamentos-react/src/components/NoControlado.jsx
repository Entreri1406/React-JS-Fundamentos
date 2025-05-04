import { useRef, useState } from "react";

const NoControlado = () => {
    const form = useRef(null); // Se crea una referencia al formulario para poder acceder a sus valores
    const [error, setError] = useState(""); // Se crea una referencia al error para poder acceder a su valor. Se puede usar el hook useState, pero en este caso no es necesario ya que no se va a renderizar el componente nuevamente. Se puede usar el hook useState, pero en este caso no es necesario ya que no se va a renderizar el componente nuevamente.

    const handleSubmit = (e) => {
        // Cada vez que se quiere hacer referencia al DOM, se debe usar el hook useRef
        e.preventDefault();
        setError(""); // Se limpia el error al enviar el formulario
        console.log("Me diste click");
        const data = new FormData(form.current); // Se crea un objeto FormData para obtener los valores del formulario
        // console.log(...data.entries()) // Se obtienen los valores del formulario. Los ... son para desestructurar el objeto y obtener los valores de cada uno de los inputs. Se puede usar data.get('title') para obtener el valor de un input específico.

        /// Captura de datos del formulario
        const dataObject = Object.fromEntries(data.entries()) // Se convierte el objeto FormData en un objeto normal para poder acceder a sus valores. Por lo que se puede desestructurar para obtener los valores de cada uno de los inputs.
        console.log(dataObject.title) // Se accede al valor del input title.
        // console.log(form.current) // Se accede al formulario mediante la referencia creada
        console.log(dataObject) // Se imprime el objeto con los valores del formulario

        /// Validación de datos del formulario
        if (!dataObject.title.trim() || !dataObject.description.trim() || !dataObject.state.trim()) { // El método trim() elimina los espacios en blanco al inicio y al final de la cadena. Se valida que el campo título no esté vacío.
            return setError("Llena todos los campos"); // Se detiene la ejecución de la función si el campo título está vacío
        };

        /// Envío de datos del formulario
    };
    return ( // En este caso no es necesario construir una función para el formulario (Método de carreteo), ya que React transfiere el evento al formulario y no a cada uno de los inputs. Por lo que se puede usar el evento e para obtener los valores de los inputs.
        <form onSubmit={handleSubmit} ref={form}>
            <input
                type="text"
                placeholder="ingrese Todo"
                className="form-control mb-2"
                name="title"
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="description"
            />
            <select className="form-select mb-2" name="state">
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
            {error !== "" && error}
        </form>
    )
};

export default NoControlado;