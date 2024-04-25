import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Inicio");
});

const port=3000
//listeners
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
