import { entorno } from "../config/config.js";
import mongoose from "mongoose";
export let Contacts;

switch (entorno.persistence) {
  case "MONGO":
    const connection = mongoose.connect("mongodb://localhost:27017/contactos");
    const { default: ContactsMongo } = await import(
      "./mongo/contacts.mongo.js"
    );
    Contacts = ContactsMongo;
    break;
  case "MEMORY":
    const { default: ContactsMemory } = await import(
      "./memory/contacts.memory.js"
    );
    Contacts = ContactsMemory;
    break;
  case "MYSQL":
    break;
  case "FS":
    break;
  default:
    break;
}
