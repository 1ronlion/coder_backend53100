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
  createContact = async (contact) => {
    const { first_name, last_name, phone } = contact;
    const newContact = await contactsModel.create({
      first_name,
      last_name,
      phone,
    });
    await newContact.save();
    return newContact;
  };
}
