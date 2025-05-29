import BotonActualizar from "./Botones/Eliminar";
import BotonEliminar from "./Botones/Actualizar";

const CrearActividad = ({ actividad }) => {

    const { id, title, description } = actividad;

    return (
        <div className="container text-center mt-3">
            <div className="row border rounded p-3 bg-light">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                    <h3>{title} - {id}</h3>
                    <span className="badge text-bg-primary">Etiqueta</span>
                </div>
                <div className="col-12 text-start">
                    <p>{description}</p>
                </div>
                <div className="col-12 d-flex justify-content-start">
                    <BotonEliminar />
                    <BotonActualizar />
                </div>
            </div>
        </div>
    )

}

export default CrearActividad;