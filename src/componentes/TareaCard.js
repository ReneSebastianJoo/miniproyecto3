import React from 'react'

const TareaCard = (props) => {

    // Destructurar: Sacar las propiedades del objeto y guardarlas en variables
    const {titulo, descripcion, completada, deleteTarea, identificador} = props;

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Completar</button>
                    <button onClick ={ () => {deleteTarea(identificador)}} className="btn btn-warning">Eliminar</button>
                </div>
            </div>}
        </div>
    )
}

export default TareaCard;