import React from 'react';
import TareaItem from './TareaItem';

function ListaTareas({ tareas, onUpdate, onDelete }) {
    if (tareas.length === 0) {
        return <p className="no-tasks">¡No hay tareas! Agrega una nueva para empezar.</p>;
    }

    return (
        <div className="lista-tareas">
            {tareas.map(tarea => (
                <TareaItem
                    key={tarea.id}
                    tarea={tarea}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ListaTareas;