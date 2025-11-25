const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea.controller'); 

router.get('/', tareaController.findAll);

router.post('/', tareaController.create);

router.put('/:id', tareaController.update); 

router.delete('/:id', tareaController.delete);

module.exports = router;