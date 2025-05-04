import ItemFruta from './ItemFruta.jsx'; // Importar un componente de otro archivo

const ListFruts = ({ frutas }) => {
    return (
        <ul>
            {
                frutas.map((item, index) => {
                    return (
                        <ItemFruta key={index} fruta={item} />
                    )
                })
            }
        </ul>
    )
}

export default ListFruts;