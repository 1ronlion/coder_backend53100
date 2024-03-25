import productsModel from "../models/products.js"

export default class ProductManager {

    constructor(){
        console.log("Trabajando con productManager")
    }

    getAll = async () => {
        let result = await productsModel.find()
        return result
    }
    getById = async (id) => {
        let result = await productsModel.findById(id)
        return result
    }
    getByBrand = async (brand) => {
        let result = await productsModel.find({brand: brand})
        return result
    }
    addProduct = async (product) => {
        let result = await productsModel.create(product)
        return result
    }
    updateProduct = async (id, productData) => {
        let result = await productsModel.updateOne({_id:id}, {$set: productData})
        return result
    }
    deleteProduct = async (id) => {
        let result = await productsModel.deleleOne({_id:id})
        return result
    }

}


