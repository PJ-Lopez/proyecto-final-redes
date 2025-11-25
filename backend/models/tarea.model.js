const db = require('../db/db'); 

exports.findAll = (result) => {
    db.query('SELECT id, nombre, descripcion, estado FROM Tareas ORDER BY fecha_creacion DESC', (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};

exports.create = (newTarea, result) => {
    db.query("INSERT INTO Tareas (nombre, descripcion) VALUES (?, ?)", 
        [newTarea.nombre, newTarea.descripcion], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newTarea }); 
    });
};

exports.updateById = (id, tarea, result) => {
    db.query(
        "UPDATE Tareas SET nombre = ?, descripcion = ?, estado = ? WHERE id = ?",
        [tarea.nombre, tarea.descripcion, tarea.estado, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id: id, ...tarea }); 
        }
    );
};

exports.remove = (id, result) => {
    db.query("DELETE FROM Tareas WHERE id = ?", id, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res); 
    });
};