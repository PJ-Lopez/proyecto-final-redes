CREATE TABLE Tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    -- El campo estado es clave y solo acepta estos tres valores
    estado ENUM('pendiente', 'completada', 'cancelada') NOT NULL DEFAULT 'pendiente',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);