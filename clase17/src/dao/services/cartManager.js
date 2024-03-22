import cartModel from "../models/carts.js"


export default class CartManager {

    constructor(){
        console.log("Trabajando con cartManager")
    }

    getCartById = async (id) => {
        let result = await cartModel.findById(id)
        return result
    }
    createCart = async () => {
        let result = await cartModel.create({})
        return result
    }
    addProduct = async (cid, pid, quantity) => {
        let cart = await cartModel.findById(cid)
        let product = cart.products.find((product) => product.product.toString() === pid)

        if (product) {
            product.quantity += quantity;
        } else {
            cart.products.push({ product: pid, quantity });
        }

        return await cart.save();
    }

    deleteProduct = async (cid, pid) => {
        let cart = await cartModel.findById(cid)
        let product = cart.products.findIndex((product) => product.product.toString() === pid)

        if(product === 0){
            console.log("Producto no encontrado")
        }else{
            cart.product.splice(product,1)
        }

        return await cart.save();
    }

}

