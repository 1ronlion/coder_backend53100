import { Router } from "express";
//import Contacts from "../dao/mongo/contacts.mongo.js";
// import Contacts from "../dao/memory/contacts.memory.js";
//import { Contacts } from "../dao/factory.js";
//import ContactDTO from '../dao/DTOs/contacts.dto.js'

import { contactService } from "../repositories/index.js";

const router = Router();

//const contactService = new Contacts();

router.get("/", async (req, res) => {
  const results = await contactService.get();
  res.status(200).send({ status: "success", payload: results });
});
//DTO
router.post("/", async (req, res) => {
  const { first_name, last_name, phone } = req.body;
  //const contact = new ContactDTO({ first_name, last_name, phone });//Formateamos la data
  const result = await contactService.createContact(contact);
  res.send({ message: "success", payload: result });
});


export default router;
