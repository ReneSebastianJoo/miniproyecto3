import React, { useEffect, useState } from 'react';
import Crear from '../componentes/Crear';
import TareaCard from '../componentes/TareaCard';
const Main = () => {
    // Traer tareas de firebase
    // 1. función que haga petición get a firebase DONE
    // 2. Mandar llamar función cuando el componente Main se monte DONE
    // 3. Crear variable de estado para guardar nuestrar tareas DONE
    // 4. Crear una card por cada tarea
    // Variables de estado
    const [tareas, setTareas] = useState([]);
    const getTareas = () => {
        console.log('Función GET');
        const URL = 'https://miniproy001-15129-default-rtdb.firebaseio.com/tareas.json';
        fetch(URL)
            .then(body => body.json())
            .then(respuesta => {
                console.log(respuesta);
                setTareas(respuesta);
            });
    }
    // Función que elimina una tarea
    const deleteTarea = (id) => {
        console.log('delete tarea');
        const URL = `https://miniproy001-15129-default-rtdb.firebaseio.com/tareas/${id}.json`;
        fetch(URL, { method: 'DELETE' })
            .then(body => body.json())
            .then(respuesta => {
                // Refrescar las tareas
                getTareas();
                console.log(respuesta)
            });
    }
    // Función que actualiza una tarea: Cambia el status de completada a true
    const actualizarTarea = (id, titulo, descripcion, completada) => {
        const URL = `https://miniproy001-15129-default-rtdb.firebaseio.com/tareas/${id}.json`;
        let objetoBody = {
            titulo,
            descripcion,
            completada
        }
        fetch(URL, { method: 'PATCH', body: JSON.stringify(objetoBody) })
            .then(respuesta => respuesta.json())
            .then(res => {
                console.log(res);
                getTareas();
            });
    }
    // 1. Enviar como prop la función deleteTarea al componente TareaCard
    // 2. En TareaCard necesitamos recibir como prop la función deleteTarea
    // 3. Mandar llamar función en TareaCard cuando se haga click en el botón eliminar
    // 4. Pasar identificador como prop a la TareaCard
    // 5. En TareaCard necesitamos recibir como prop el parámetro identificador


    const crearTarea = (titulo, descripcion) => {
        const URL = 'https://miniproy001-15129-default-rtdb.firebaseio.com/tareas.json';

        const objBody = {
            titulo,
            descripcion,
            completada: false
        };

        fetch(URL, { method: 'POST', body: JSON.stringify(objBody)})
            .then(body => body.json())
            .then(respuesta => console.log(respuesta));
    }

    // El callback del useEffect se ejecutará antes de que el componente se monte
    useEffect(() => {
        getTareas();
    }, []);
    return (
        <div className="container">
            <h1>Tareas</h1>
            <div className="my-5">
                <Crear crearTarea={crearTarea}/>
            </div>

            {/* <TareaCard 
                titulo="Titulo X" 
                descripcion="Descripción X" 
                completada={false}
            /> */}
            {/* ERROR */}
            {/* {
                tareas.map(tarea => <TareaCard/>)
            } */}
            <div className="d-flex flex-wrap">
                {
                    Object.keys(tareas).map(identificador => 
                        <TareaCard 
                            titulo = {tareas[identificador].titulo} 
                            descripcion = {tareas[identificador].descripcion}
                            completada = {tareas[identificador].completada}
                            deleteTarea = {deleteTarea}
                            actualizarTarea = {actualizarTarea}
                            identificador = {identificador}
                            key={identificador}/>)
                }
            </div>
        </div>
    )
}
export default Main;