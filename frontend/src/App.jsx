import React, { useState, useEffect } from 'react';
import ListaTareas from './components/ListaTareas';
import ModalTarea from './components/ModalTarea';
import { fetchTareas, createTarea, updateTarea, deleteTarea } from './api/tareasApi';
import './index.css';

function App() {
    const [tareas, setTareas] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const loadTareas = async () => {
        try {
            const data = await fetchTareas();
            const formattedData = data.map(t => ({ ...t, id: t.id ? Number(t.id) : t.id }));
            setTareas(formattedData);
        } catch (error) {
            console.error('Fallo al cargar las tareas:', error);
        }
    };

    useEffect(() => {
        loadTareas();
    }, []);

    const handleCreateTarea = async (newTarea) => {
        try {
            const createdTarea = await createTarea(newTarea);
            const formattedTarea = { ...createdTarea, id: Number(createdTarea.id) };
            setTareas([...tareas, formattedTarea]);
            setModalOpen(false);
        } catch (error) {
            console.error('Fallo al crear la tarea:', error);
        }
    };

    const handleUpdateTarea = async (id, updatedFields) => {
        try {
            const updatedTarea = await updateTarea(id, updatedFields);
            setTareas(tareas.map(t => (t.id === id ? { ...t, ...updatedTarea } : t)));
        } catch (error) {
            console.error('Fallo al actualizar la tarea:', error);
        }
    };

    const handleDeleteTarea = async (id) => {
        if (!window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) return;
        try {
            await deleteTarea(id);
            setTareas(tareas.filter(t => t.id !== id));
        } catch (error) {
            console.error('Fallo al eliminar la tarea:', error);
        }
    };

    return (
        <div className="container">
            <h1>Demostracion final</h1>

            <button onClick={() => setModalOpen(true)} className="btn-add">
                + Agregar Nueva Tarea
            </button>

            <ListaTareas
                tareas={tareas}
                onUpdate={handleUpdateTarea}
                onDelete={handleDeleteTarea}
            />

            {modalOpen && (
                <ModalTarea
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleCreateTarea}
                />
            )}
        </div>
    );
}

export default App;