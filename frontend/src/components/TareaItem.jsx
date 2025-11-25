import React from 'react';
import { toggleEstado } from '../api/tareasApi';

function TareaItem({ tarea, onUpdate, onDelete }) {
    const { id, nombre, descripcion, estado } = tarea;

    const handleToggleEstado = () => {
        const nuevoEstado = toggleEstado(estado);
        onUpdate(id, {
            nombre: nombre,
            descripcion: descripcion,
            estado: nuevoEstado
        });
    };

    let estadoDisplay;
    let buttonText;
    let estadoClass = `status-${estado}`;

    switch (estado) {
        case 'pendiente':
            estadoDisplay = '🔴 Pendiente';
            buttonText = 'Marcar como Completada';
            break;
        case 'completada':
            estadoDisplay = '✅ Completada';
            buttonText = 'Marcar como Cancelada';
            break;
        case 'cancelada':
            estadoDisplay = '❌ Cancelada';
            buttonText = 'Volver a Pendiente';
            break;
        default:
            estadoDisplay = estado;
            buttonText = 'Cambiar Estado';
    }

    return (
        <div className={`tarea-item ${estadoClass}`}>
            <div className="tarea-info">
                <h4>
                    {nombre} <span className="estado-badge">{estadoDisplay}</span>
                </h4>
                <p>{descripcion}</p>
            </div>
            <div className="tarea-actions">
                <button onClick={handleToggleEstado} className="btn-estado">
                    {buttonText}
                </button>
                <button onClick={() => onDelete(id)} className="btn-eliminar">
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default TareaItem;