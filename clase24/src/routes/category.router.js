import express from "express";
import CategoryManager from "../controllers/managers/category.manager.js";

const router = express.Router();
const categoryManager = new CategoryManager();//instanciamos el manager


router.get("/categories", async (req, res) => {
  try {
    const categories = await categoryManager.getAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/category/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoryManager.getById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/category", async (req, res) => {
  try {
    const newCategory = await categoryManager.createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.put("/category:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedCategory = await categoryManager.updateCategory(
      categoryId,
      req.body
    );
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.delete("/category/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const result = await categoryManager.deleteCategory(categoryId);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
