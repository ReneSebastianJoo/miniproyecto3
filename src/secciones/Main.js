import React, {useEffect, useState} from 'react';
import TareaCard from "../componentes/TareaCard";



const Main = () => {

    const [tareas, setTareas] = useState;

    const getTareas = () => {
        console.log("Funcion GET");
        const URL = "https://miniproy001-15129-default-rtdb.firebaseio.com/tareas.json"

        fetch(URL)
        .then(body => body.json())
        .then(respuesta => {
            setTareas(respuesta);
            console.log(tareas);
        })
    }

    useEffect(() => {
        getTareas()
    },[])

    return (
        <div>
            <h1>Soy la seccion principal</h1>
            <TareaCard titulo="tituloX" descripcion="Descripcion Y" completada={false} />
        </div>
    )
}

export default Main;
