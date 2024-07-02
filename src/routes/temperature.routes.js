import express from "express";
import TemperatureControllers from "../controllers/temperature.controllers.js";

export default class TemperatureRouter {
  #router;
  #controllers;

  constructor() {
    this.#router = express.Router();
    this.#controllers = new TemperatureControllers();
  }

  start() {
    this.#router.get("/sondas", this.#controllers.getSondas);
    this.#router.get("/sonda/:id", this.#controllers.getSondaByID);
    this.#router.post("/sondas", this.#controllers.createSonda);

    /*
    this.#router.post("/users", this.#controllers.createUser);

    this.#router.put("/users/:id", this.#controllers.updateUserByID);

    this.#router.patch("/users/:id", this.#controllers.modifyUserByID);
    this.#router.delete("/users/:id", this.#controllers.removeUserByID); 
    */

    return this.#router;
  }
}
