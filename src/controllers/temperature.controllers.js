import TemperatureServices from "../services/temperature.services.js";

export default class TemperatureControllers {
  #services;
  constructor() {
    this.#services = new TemperatureServices();
  }

  checkEmptyObject = (user) => Object.keys(user).length === 0;

  getSondas = async (req, res) => {
    try {
      const sondas = await this.#services.getSondas();
      const date = new Date();

      console.log(
        `All sondas' data have been loaded from the database available to ${date.toUTCString()}`
      );
      /* res
        .status(200)
        .send({statusCode: 200, message: RESULT_OUTPUT, result: users});
      */

      res.status(200).send(sondas);
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(400)
        .send(
          "<!DOCTYPE html><html><title>400 Bad Request</title><body><h1>The operation could not been handled by the server. Try again!</h1></body></html>"
        );
    }
  };

  getSondaByID = async (req, res) => {
    try {
      const {id} = req.params;
      const sondaFound = await this.#services.getSondaByID(id);

      if (!sondaFound) {
        throw new Error(
          "The specified sonda ID is incorrect, missing or has been deleted in the past"
        );
      }

      res.status(200).send(sondaFound);
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(404)
        .send(
          `<!DOCTYPE html><html><title>404 Not Found</title><body><h1>${error.message}</h1></body></html>`
        );
    }
  };

  createSonda = async (req, res) => {
    try {
      const sondaToAdd = req.body;

      if (this.checkEmptyObject(sondaToAdd)) {
        throw new Error("An empty sonda object cannot be processed");
      }

      const createdSonda = await this.#services.createSonda(sondaToAdd);

      console.log(
        "New sonda data has been created successfully in the database"
      );

      res.status(201).send(createdSonda);
    } catch (error) {
      console.log("The creation of new sonda data could not be completed");
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(406)
        .send(
          `<!DOCTYPE html><html><title>406 Not Acceptable</title><body><h1>${error.message}</h1></body></html>`
        );
    }
  };

  getSondaStats = async (req, res) => {
    try {
      const stats = await this.#services.getSondaStats();

      res.status(200).send(stats);
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(400)
        .send(
          "<!DOCTYPE html><html><title>400 Bad Request</title><body><h1>The operation could not been handled by the server. Try again!</h1></body></html>"
        );
    }
  };
}
