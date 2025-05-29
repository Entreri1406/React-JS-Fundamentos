import Controlado from './components/Controlado.jsx'; // Importar un componente de otro archivo
import RecorridoLista from './components/Pract-Form/RecorridoLista.jsx';
import QRcodeGen from './components/QRcodeGen.jsx';

// import { useState } from 'react'; // Importar el hook useState de React

const initialState = [
    {
        id: 1,
        title: "Actividad #01",
        description: "Descripción de la actividad #01",
        state: "Pendiente",
    },

    {
        id: 2,
        title: "Actividad #02",
        description: "Descripción de la actividad #02",
        state: "Completado",
    }
]

const App = () => {

    // const [actividades, setActividades] = useState(initialState);

    return (
        <>
            <div className="container">
                <h1 className='text-center mt-2'>To-Do App</h1>
                <h3>Ingrese la actividad:</h3>
                <Controlado />
                <RecorridoLista actividades={initialState} />
            </div>
        </>
    ); /* Export un archivo JSX. Está más cerca de JS que de HTML */
}
export default App;