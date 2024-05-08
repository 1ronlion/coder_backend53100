import contacts from "./data/contacts.js";
export default class Contacts {
  constructor() {
    // this.data = [];
  }
  //metodos
  get = () => {
    return contacts;
  };
//   getByID = (id) => {
//     return this.data;//hacemos la con el metodo correcpondiente
//   };
}
