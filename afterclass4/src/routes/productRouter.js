import ProductManager from "../dao/services/productManager.js";
import express from "express";

const productManager = new ProductManager();
const router = express.Router();

router.get("/all", (req, res) => {
  let limit = req.query;
  let data = productManager.getAll();

  res.json({ data });
});

router.post("/add", (req, res) => {
  //const {title, description,code,category,brand,price,stock,status,thumbnails} = req.body
  try {
    const newProduct = req.body;

    let result = productManager.addProduct(newProduct);

    res.status(201).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al agregar el producto " + error);
  }
});

export default router;
