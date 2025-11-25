import React, { useState } from 'react';

function ModalTarea({ onClose, onSubmit }) {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim()) {
            onSubmit({ nombre, descripcion, estado: 'pendiente' });
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target.className === 'modal-backdrop') {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h3>Agregar Nueva Tarea</h3>
                <form onSubmit={handleSubmit}>
                    <label>Nombre de la Tarea:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />

                    <label>Descripción:</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />

                    <div className="modal-buttons">
                        <button type="submit">Guardar Tarea</button>
                        <button type="button" onClick={onClose} className="btn-secondary">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalTarea;