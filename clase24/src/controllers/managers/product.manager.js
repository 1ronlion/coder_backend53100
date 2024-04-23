import productModel from "../../models/product.model.js";

export default class ProductManager {
  constructor() {
    console.log("Constructor ProductManager");
  }
  getAll = async () => {
    const result = await productModel.find();
    return result;
  };
  getById = async (id) => {
    const result = await productModel.findById(id);

    return result;
  };
  createProduct = async (product) => {
    const result = await productModel.create(product);
    return result;
  };
  updateProduct = async (id, productData) => {
    const result = await productModel.updateOne(
      { _id: id },
      { $set: productData }
    );
    return result;
  };
  deleteProduct = async (id) => {
    const result = await productModel.deleleOne({ _id: id });
    return result;
  };

  //buscar con categorias incluidas
  getAllProductsWithCategories = async () => {
    //lógica a implementar
  };
  
  //paginate
  getPaginatedProducts = async (page = 1, limit = 10) => {
    //lógica a implementar
  };
}
