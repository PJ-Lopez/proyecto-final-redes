const BASE_URL = 'https://api.basilinux.online/api/tareas';

export const toggleEstado = (currentState) => {
    switch (currentState) {
        case 'pendiente':
            return 'completada';
        case 'completada':
            return 'cancelada';
        case 'cancelada':
            return 'pendiente';
        default:
            return 'pendiente';
    }
};

export const fetchTareas = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Error al cargar tareas');
    return response.json();
};

export const createTarea = async (tarea) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tarea),
    });
    if (!response.ok) throw new Error('Error al crear tarea');
    return response.json();
};

export const updateTarea = async (id, updatedFields) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFields),
    });
    if (!response.ok) throw new Error('Error al actualizar tarea');
    return response.json();
};

export const deleteTarea = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error al eliminar tarea');
    return response.json();
};