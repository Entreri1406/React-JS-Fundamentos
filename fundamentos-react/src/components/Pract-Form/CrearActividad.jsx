const CrearActividad = () => {

    return (
        <div className="container text-center mt-5">
            <div className="row border rounded p-3 bg-light">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                    <h3>Título</h3>
                    <span className="badge text-bg-primary">Etiqueta</span>
                </div>
                <div className="col-12 text-start">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur cupiditate molestias incidunt velit possimus, quaerat minus ea atque fuga totam, pariatur cum ipsum reiciendis non placeat, quia accusantium quo.</p>
                </div>
                <div className="col-12 d-flex justify-content-start">
                    <button className="btn btn-danger">Eliminar</button>
                    <button className="btn btn-info mx-2">Actualizar</button>
                </div>
            </div>
        </div>
    )

}

export default CrearActividad;