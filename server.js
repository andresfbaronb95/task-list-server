const express = require("express");
const app = express();

const tasks = [
  {
    id: 1,
    description: "Hacer compras",
    completed: false,
  },
  {
    id: 2,
    description: "Lavar el coche",
    completed: true,
  },
  {
    id: 3,
    description: "Estudiar programación",
    completed: false,
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(tasks);
});

const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

app.use("/list/view", listViewRouter);
app.use("/list/edit", listEditRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
