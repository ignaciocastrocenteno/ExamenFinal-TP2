import ModelFactory from "../models/DAO/AbstractFactory.js";
import config from "../../config.js";

export default class TemperatureServices {
  #models;
  constructor() {
    this.#models = ModelFactory.get(config.PERSISTENCE_TYPE);
  }

  getSondas = async () => {
    const sondas = await this.#models.getSondas();
    return sondas;
  };

  getSondaByID = async (id) => {
    const sonda = await this.#models.getSondaByID(id);
    return sonda;
  };

  createSonda = async (sondaToAdd) => {
    const result = await this.#models.createSonda(sondaToAdd);
    return result;
  };

  getSondaStats = async () => {
    const stats = await this.#models.getSondaStats();
    return stats;
  };
}
