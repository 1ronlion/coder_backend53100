import { Router } from "express";
import ProductManager from "../controllers/managers/product.manager.js";
const router = Router();
const productManager = new ProductManager();

//get Products
router.get("/products", async (req, res) => {
  //lógica a implementar
const page= req.params.page 
const limit= req.params.limit 

  try {
    //const products = await productManager.getAll();
    //const products = await productManager.getAllProductsWithCategories();
    const products = await productManager.getPaginatedProducts(page, limit);
    res.status(200).json({ products }); //internamente json y se lo pasa a send()
  } catch (error) {
    res.status(500).json({ error: `Error al recibir los productos` });
  }
});
//get Product
router.get("/product", async (req, res) => {
  try {
    const { id } = req.query;
    const product = await productManager.getById(id);
    if (product) {
      res.status(200).json({ product });
    } else {
      res.status(404).json({ error: `Producto con id: ${_id} no encontrado` });
    }
  } catch (error) {
    console.log(`Error al cargar el producto: ${error}`);
    res.status(500).json({ error: `Error al recibir el producto` });
  }
});
//create product
router.post("/", async (req, res) => {
  //validar con try catch
  const newProduct = req.body;

  const result = await productManager.createProduct(newProduct);
  res.status(201).json({ result });
});

//update product
router.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = req.body;

    const result = await productManager.updateProduct(id, updatedProduct);
    //validar que se haya ejecutado la consulta
    if (result) {
      res.status(200).json({ message: "Producto actualizado exitosamente" });
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});
//delete product
router.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await productManager.deleteProduct(id);

    if (deletedProduct) {
      res.status(200).json({ message: "Producto eliminado exitosamente" });
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
});

export default router;
