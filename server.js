const express = require("express");
const app = express();
app.use(express.json());

const animales = [
  "Perro", "Gato", "León", "Tigre", "Elefante",
  "Jirafa", "Lobo", "Zorro", "Delfín", "Águila"
];

app.get("/", (req, res) => {
  res.send("API de animales funcionando");
});

app.get("/animales", (req, res) => {
  res.json(animales);
});

app.get("/animales/:id", (req, res) => {
  const animal = animales[req.params.id];
  res.json(animal || "No existe");
});

app.listen(3000, () => console.log("API corriendo en http://localhost:3000"));
