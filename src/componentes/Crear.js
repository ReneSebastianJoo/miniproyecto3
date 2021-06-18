import React, {useState} from 'react'

const Crear = (props) => {
    const {crearTarea} = props;

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="inputTitulo" className="form-label">Titulo Tarea</label>
                <input onChange ={(evento) => {
                    console.log(evento.target.value);
                    setTitulo(evento.target.value);
                    }} type="text" className="form-control" id="inputTitulo" aria-describedby="titulo"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputDescripcion" className="form-label">Descripción Tarea</label>
                <input onChange = {(evento) => {
                    console.log(evento.target.value);
                    setDescripcion(evento.target.value);
                    }} type="text" className="form-control" id="inputDescripcion" />
            </div>
            <button onClick={()=> crearTarea(titulo, descripcion)} type="submit" className="btn btn-primary">Crear tarea</button>
        </form>
    )
}

export default Crear