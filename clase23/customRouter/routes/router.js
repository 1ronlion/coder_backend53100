import { Router } from "express";

export default class UserRouter {
  constructor() {
    this.router = Router();
    this.init();
  }
  //metodos
  getRouter() {
    return this.router;
  }
  init() {}

  //get
  get(path, ...callbacks) {
    this.router.get(path,this.generateCustomResponses ,this.applyCallbacks(callbacks));
  }

  //funcion auxiliar
  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.log(error);
        params[1].status(500).send(error); //res.status(500).send(error)
      }
    });
  }

  generateCustomResponses = (req, res, next) => {
    res.sendSuccess = (payload) => res.send({ status: "exito", payload });
    res.sendUserError = (error) =>
      res.status(400).send({ status: "Error", error });
    next();
  };
}
