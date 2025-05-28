// Componentes en react en mayúscualas y HTML en minúsculas
// No es recomendable crear varios componentes en el mismo archivo. Por fines didácticos se hace así, pero luego se modulizará.

// En Vite podemos importar imágenes directamente desde la carpeta src/assets/images/ejemplo-img.jpg
// import img1 from './assets/images/ejemplo-img.jpg';
// import MyButton from './components/MyButton.jsx'; // Importar un componente de otro archivo
// import WelcomeText from './components/WelcomeText.jsx'; // Importar un componente de otro archivo
// import ListFruts from './components/ListFruts.jsx'; // Importar un componente de otro archivo
// import NoControlado from './components/NoControlado.jsx'; // Importar un componente de otro archivo
import Controlado from './components/Controlado.jsx'; // Importar un componente de otro archivo
// import Cat from './components/Cat.jsx'; // Importar un componente de otro archivo

//// Librerías practica formularios controlados
import CrearActividad from './components/Pract-Form/CrearActividad.jsx';


const App = () => {

    // const title = "Hola soy React-desde title"; // Variable de tipo string
    // const user = false;
    // const frutas = ["🍐", "🍉", "🍎"]; // Variable de tipo array

    return (
        // Los componentes HTML deben estar dentro de un contenedor al usarse ()
        // <>
        //     <h1 className="text-center">{title}</h1>
        //     <img src={img1} alt="Imagen de prueba React JS" />
        //     <h2>Lista de frutas</h2>
        //     <ListFruts frutas={frutas} />
        //     <MyButton text="boton-1" />
        //     <MyButton text="boton-2" />
        //     <WelcomeText user={user} />
        //     <div className="container">
        //         <h1>Formularios no controlados</h1>
        //         <NoControlado />
        //         <h1><br />Formularios Controlados</h1>
        //         <Controlado />
        //     </div>
        //     <Cat />
        // </>

        //// Práctica formularios controlados
        <>

            <div className="container">
                <h1 className='text-center mt-2'>To-Do App</h1>
                <h3>Ingrese la actividad:</h3>
                <Controlado />
                <CrearActividad />
            </div>

        </>

    ); /* Export un archivo JSX. Está más cerca de JS que de HTML */
}
export default App;