import React from 'react'

const TareaCard = (props) => {

    const {titulo, descripcion, completada} = props;

    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title" {titulo}>Card title</h5>
                    <p className="card-text" {descripcion}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="a" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default TareaCard;
