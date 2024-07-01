import UserServices from "../services/user.services.js";

export default class UserControllers {
  #services;
  constructor() {
    this.#services = new UserServices();
  }

  checkEmptyObject = (user) => Object.keys(user).length === 0;

  getUsers = async (req, res) => {
    try {
      const users = await this.#services.getUsers();

      const date = new Date();
      const RESULT_OUTPUT = `All users have been loaded from the database available from ${date.toUTCString()}`;
      /* res
        .status(200)
        .send({statusCode: 200, message: RESULT_OUTPUT, result: users});
      */

      res.status(200).send(users);
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(400)
        .send(
          "<!DOCTYPE html><html><title>400 Bad Request</title><body><h1>The operation could not been handled by the server. Try again!</h1></body></html>"
        );
    }
  };

  getUserByID = async (req, res) => {
    try {
      const {id} = req.params;
      const userFound = await this.#services.getUserByID(id);

      if (!userFound) {
        throw new Error(
          "The specified user ID is incorrect, missing or has been deleted in the past"
        );
      }

      res.status(200).send(userFound);
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(404)
        .send(
          "<!DOCTYPE html><html><title>404 Not Found</title><body><h1>Page Not Found</h1></body></html>"
        );
    }
  };

  createUser = async (req, res) => {
    try {
      const userToAdd = req.body;

      if (this.checkEmptyObject(userToAdd)) {
        throw new Error("An empty user object cannot be processed");
      }

      const createdUser = await this.#services.createUser(userToAdd);
      const RESULT_OUTPUT =
        "A new user has been created successfully in the database";
      console.log(RESULT_OUTPUT);

      res.status(201).send(createdUser);
    } catch (error) {
      console.log("The creation of the new user could not be completed");
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(406)
        .send(
          "<!DOCTYPE html><html><title>406 Not Acceptable</title><body><h1>The received content is not acceptable!</h1></body></html>"
        );
    }
  };

  updateUserByID = async (req, res) => {
    try {
      const userToUpdate = req.body;
      const {id} = req.params;
      const result = await this.#services.updateUserByID(userToUpdate, id);

      if (this.checkEmptyObject(userToUpdate)) {
        throw new Error("An empty user object cannot be processed");
      }

      const RESULT_OUTPUT =
        "The user has been updated (PUT method) correctly upon the database";
      res
        .status(200)
        .send({statusCode: 200, message: RESULT_OUTPUT, result: result});
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(409)
        .send(
          "<!DOCTYPE html><html><title>409 Conflict</title><body><h1>There has been a conflict related to the request on the server!</h1></body></html>"
        );
    }
  };

  modifyUserByID = async (req, res) => {
    try {
      const userToModify = req.body;
      const {id} = req.params;
      const result = await this.#services.modifyUserByID(userToModify, id);

      if (this.checkEmptyObject(userToModify)) {
        throw new Error("An empty user object cannot be processed");
      }

      const RESULT_OUTPUT =
        "The user has been modified (PATCH method) correctly based on the given information";
      res
        .status(200)
        .send({statusCode: 200, message: RESULT_OUTPUT, result: result});
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(409)
        .send(
          `<!DOCTYPE html><html><title>409 Conflict</title><body><h1>${error}</h1></body></html>`
        );
    }
  };

  removeUserByID = async (req, res) => {
    try {
      const {id} = req.params;
      const result = await this.#services.removeUserByID(id);
      const RESULT_OUTPUT =
        "The user has been removed successfully from the database";

      res
        .status(200)
        .send({statusCode: 200, message: RESULT_OUTPUT, result: result});
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(409)
        .send(
          `<!DOCTYPE html><html><title>409 Conflict</title><body><h1>${error}</h1></body></html>`
        );
    }
  };
}
