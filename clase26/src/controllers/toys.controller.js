import toyService from "../services/toys.service.js";

class ToyController {
  //constructor
  constructor(){
    console.log("Controlador de juguetes");
  }

  async getAllToys(req, res) {
    const toys = await toyService.getAllToys();

    res.status(200).json({ status: "success", toys });
  }
  async createToy(req, res) {
    const newToy = req.body;
    await toyService.createToy(newToy);

    res.status(201).json({ status: "success", newToy });
  }
}

export default new ToyController();
