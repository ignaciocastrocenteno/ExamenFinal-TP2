import {faker} from "@faker-js/faker";

export default class GenerateRandomSondaData {
  createSonda() {
    const data = {
      id: faker.number.int({min: 1, max: 5}),
      temperatura: faker.number.float({min: -20, max: 100}),
    };

    return data;
  }
}
