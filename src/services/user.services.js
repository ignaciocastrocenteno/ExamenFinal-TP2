import ModelFactory from "../models/DAO/AbstractFactory.js";
import config from "../../config.js";

export default class UserServices {
  #models;
  constructor() {
    this.#models = ModelFactory.get(config.PERSISTENCE_TYPE);
  }

  getUsers = async () => {
    const users = await this.#models.getUsers();
    return users;
  };

  getUserByID = async (id) => {
    const user = await this.#models.getUserByID(id);
    return user;
  };

  createUser = async (userToAdd) => {
    const result = await this.#models.createUser(userToAdd);
    return result;
  };

  updateUserByID = async (userToUpdate, id) => {
    const result = await this.#models.updateUserByID(userToUpdate, id);
    return result;
  };

  modifyUserByID = async (userToModify, id) => {
    const result = await this.#models.modifyUserByID(userToModify, id);
    return result;
  };

  removeUserByID = async (id) => {
    const result = await this.#models.removeUserByID(id);
    return result;
  };
}
