const express = require("express");
const listViewRouter = express.Router();

// Ruta para listar tareas completas
listViewRouter.get("/complete", (req, res) => {
  // Agregar lógica para listar tareas completas aquí
});

// Ruta para listar tareas incompletas
listViewRouter.get("/incomplete", (req, res) => {
  // Agregar lógica para listar tareas incompletas aquí
});

module.exports = listViewRouter;
