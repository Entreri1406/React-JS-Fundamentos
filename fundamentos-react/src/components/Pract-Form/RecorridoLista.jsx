import CrearActividad from "./CrearActividad";

const RecorridoLista = ({ actividades }) => {
    return actividades.map((actividad) => {
        return <CrearActividad actividad={actividad} key={actividad.id} />
    })
}

export default RecorridoLista;