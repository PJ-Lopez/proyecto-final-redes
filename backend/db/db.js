const mysql = require('mysql2'); 

const connection = mysql.createConnection({
    // En Docker, el host será 'db' (el nombre del servicio).
    // Si no encuentra la variable, usa 'localhost' (para cuando trabajes sin docker).
    host: process.env.DB_HOST || 'localhost',
    
    user: process.env.DB_USER || 'root',
    
    // Aquí tomará la contraseña de Docker, o usará la tuya por defecto
    password: process.env.DB_PASSWORD || 'Lopezpedro529',
    
    database: process.env.DB_NAME || 'tareas'
});

connection.connect(error => {
    if (error) {
        console.error("Error conectando a la base de datos: " + error.stack);
        return;
    }
    console.log("Conectado a MySQL con éxito. ID de hilo: " + connection.threadId);
});

module.exports = connection;