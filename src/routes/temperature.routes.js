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
    this.#router.get("/stats", this.#controllers.getSondaStats);
    this.#router.post("/sondas", this.#controllers.createSonda);

    return this.#router;
  }
}
