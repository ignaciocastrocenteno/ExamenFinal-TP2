export default class TemperatureMemoryModels {
  #sondas;
  constructor() {
    this.#sondas = [
      /* {
        id: 0, // sondas 1 a 5
        temperatura: 34,  // entre -20 y 100 °C
      }, */
    ];
  }

  getSondas = async () => {
    return this.#sondas;
  };

  getSondaByID = async (id) => {
    const MSG_ERROR = "Número de sonda incorrecto";
    const sondaFound = this.#sondas.find((user) => user.id == id);

    if (!sondaFound) {
      throw new Error(MSG_ERROR);
    }

    return sondaFound;
  };

  createSonda = async (sondaToAdd) => {
    const MSG_ERROR = "Datos no válidos";
    if (!("id" in sondaToAdd && "temperatura" in sondaToAdd)) {
      throw new Error(
        "Both 'id' and 'temperatura' properties are mandatory in order to persist new sonda data"
      );
    }

    let sonda = sondaToAdd;
    const {id, temperatura} = sonda;
    if (id < 1 || id > 5) {
      /* throw new Error(
        "The 'id' property cannot be lower than 1 or greater than 5"
      ); */
      throw new Error(MSG_ERROR);
    }

    if (temperatura < -20 || temperatura > 100) {
      /* throw new Error(
        "The 'temperatura' property cannot be lower than -20°C or greater than 100°C"
      ); */
      throw new Error(MSG_ERROR);
    }

    sonda["registered"] = new Date().toUTCString();
    this.#sondas.push(sonda);

    return sondaToAdd;
  };

  /* getSondaStats = async () => {
    const stats = {
      cantidadTotalMuestras: this.#sondas.length,
      temperaturaSondas: {},
    };

    this.#sondas.forEach((element, index, arr) => {
      const statsPerSonda = this.#sondas.find((e) => {
        if (e.id == index) {
          console.log(e);
        }
      });
      console.log(statsPerSonda);
    });

    return stats;
  }; */
}
