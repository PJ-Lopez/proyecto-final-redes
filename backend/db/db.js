const mysql = require('mysql2'); 

// Esto carga las variables del archivo .env (para cuando trabajas en local)
require('dotenv').config();

const connection = mysql.createConnection({
    // Busca la variable de entorno, si no existe usa 'localhost'
    host: process.env.DB_HOST || 'localhost',
    
    user: process.env.DB_USER || 'root',
    
    // 🛡️ SEGURIDAD: Aquí ya NO ponemos la contraseña real. 
    // Si no encuentra la variable DB_PASSWORD, se quedará undefined (lo correcto).
    password: process.env.DB_PASSWORD, 
    
    database: process.env.DB_NAME || 'tareas'
});

connection.connect(error => {
    if (error) {
        console.error("❌ Error conectando a la base de datos: " + error.stack);
        return;
    }
    console.log("✅ Conectado a MySQL con éxito. ID de hilo: " + connection.threadId);
});

module.exports = connection;