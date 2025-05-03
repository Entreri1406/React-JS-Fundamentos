// Componentes en react en mayúscualas y HTML en minúsculas
// No es recomendable crear varios componentes en el mismo archivo. Por fines didácticos se hace así, pero luego se modulizará.

// En Vite podemos importar imágenes directamente desde la carpeta src/assets/images/ejemplo-img.jpg
import img1 from './assets/images/ejemplo-img.jpg';

const MyButton = ({ text }) => { // props es un objeto que contiene todas las propiedades que le pasamos al componente. Se puede desestructurar para obtener las propiedades que necesitamos.
    const handleClickButton = (title) => {
        console.log("Soy un click " + title);
    }
    return ( // La función en onClick se ejecuta al dar click al botón. Pero, si quisieramos pasarle un argumento, se debe usar una función anónima o una función flecha.
        <button onClick={() => handleClickButton(text)}>
            {text}
        </button>
    )
}

const WelcomeText = ({ user }) => user ? <h2>Online</h2> : <h2>Offline</h2>;

const ItemFruta = (props) => {
    return (
        <li>
            {props.fruta}
        </li>
    )
};


const App = () => {

    const title = "Hola soy React-desde title"; // Variable de tipo string
    const user = false;
    const frutas = ["🍐", "🍎", "🍉"];

    return (
        // Los componentes HTML deben estar dentro de un contenedor al usarse ()
        <>
            <h1 className="text-center">{title}</h1>
            <img src={img1} alt="Imagen de prueba React JS" />
            <MyButton text="boton-1" />
            <MyButton text="boton-2" />
            <MyButton text="boton-3" />
            <WelcomeText user={user} />
            <ul>
                {
                    frutas.map((item, index) => {
                        return (
                            <ItemFruta key={index} fruta={item} />
                        )
                    })
                }
            </ul>
        </>
    ); /* Export un archivo JSX. Está más cerca de JS que de HTML */
}
export default App;