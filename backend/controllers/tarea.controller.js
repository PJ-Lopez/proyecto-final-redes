const Tarea = require('../models/tarea.model');

exports.findAll = (req, res) => {
    Tarea.findAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Error al recuperar tareas."
            });
        else res.send(data);
    });
};

exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: "¡El nombre de la tarea no puede estar vacío!"
        });
        return;
    }

    const newTarea = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion || '',
        estado: 'pendiente'
    };

    Tarea.create(newTarea, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Error al crear la tarea."
            });
        else res.status(201).send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body.nombre || !req.body.estado) { 
        res.status(400).send({
            message: "Los campos de nombre y estado son obligatorios para actualizar."
        });
        return;
    }

    Tarea.updateById(
        req.params.id,
        req.body,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se encontró la tarea con id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar la tarea con id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Tarea.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró la tarea con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar la tarea con id " + req.params.id
                });
            }
        } else res.send({ message: `¡Tarea eliminada con éxito!` });
    });
};