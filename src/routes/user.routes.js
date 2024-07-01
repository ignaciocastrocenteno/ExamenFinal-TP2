import express from "express";
import UserControllers from "../controllers/user.controllers.js";

export default class UserRouter {
  #router;
  #controllers;

  constructor() {
    this.#router = express.Router();
    this.#controllers = new UserControllers();
  }

  start() {
    this.#router.get("/users", this.#controllers.getUsers);
    this.#router.get("/users/:id", this.#controllers.getUserByID);

    this.#router.post("/users", this.#controllers.createUser);

    this.#router.put("/users/:id", this.#controllers.updateUserByID);

    this.#router.patch("/users/:id", this.#controllers.modifyUserByID);
    this.#router.delete("/users/:id", this.#controllers.removeUserByID);

    return this.#router;
  }
}
