const express = require("express");
const listEditRouter = express.Router();

// Ruta para crear una tarea (POST)
listEditRouter.post("/create", (req, res) => {
  // Agregar lógica para crear una tarea aquí
});

// Ruta para eliminar una tarea (DELETE)
listEditRouter.delete("/delete/:taskId", (req, res) => {
  // Agregar lógica para eliminar una tarea aquí
});

// Ruta para actualizar una tarea (PUT)
listEditRouter.put("/update/:taskId", (req, res) => {
  // Agregar lógica para actualizar una tarea aquí
});

module.exports = listEditRouter;
