import React from 'react'

const TareaCard = (props) => {

    // Destructurar: Sacar las propiedades del objeto y guardarlas en variables
    const {titulo, descripcion, completada, deleteTarea, identificador, actualizarTarea} = props;

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <div className="d-flex justify-content-between">
                    {
                        completada
                        ? <button onClick={() => { actualizarTarea(identificador, titulo, descripcion, false)} }
                        className="btn btn-success">Reanudar</button>
                        : <button onClick={() => { actualizarTarea(identificador, titulo, descripcion, true)} }
                        className="btn btn-primary">Completar</button>
                    }
                    <button onClick={() => { deleteTarea(identificador)}} className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}
export default TareaCard;


