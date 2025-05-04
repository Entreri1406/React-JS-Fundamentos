import { useState } from 'react';

const MyButton = () => { // props es un objeto que contiene todas las propiedades que le pasamos al componente. Se puede desestructurar para obtener las propiedades que necesitamos.

    const [stateNumber, stateFunction] = useState(1)

    const handleClickButton = () => {
        stateFunction(stateNumber + 1); // Cambia el valor del estado a 2. Se puede usar una función anónima o una función flecha.;
    }
    // return ( // La función en onClick se ejecuta al dar click al botón. Pero, si quisieramos pasarle un argumento, se debe usar una función anónima o una función flecha.
    //     <button onClick={() => handleClickButton(text)}>
    //         {text}
    //     </button>
    // )

    return ( // La función en onClick se ejecuta al dar click al botón. Pero, si quisieramos pasarle un argumento, se debe usar una función anónima o una función flecha.1
        <button onClick={handleClickButton}>
            Boton: {stateNumber}
        </button>
    )
}

export default MyButton; // Exportamos el componente para poder usarlo en otros archivos. Se puede exportar como default o como named export. En este caso se usa default porque solo hay un componente por archivo.