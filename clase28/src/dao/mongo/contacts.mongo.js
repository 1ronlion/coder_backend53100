import contactModel from "./Models/Contacts.js";

export default class Contacts {
  constructor() {}
  //metodos
  get = async () => {
    const products = await contactModel.find();
    return products;
  };
  getByID = async (id) => {
    const products = await contactModel.find();
    return products;
  };
}
