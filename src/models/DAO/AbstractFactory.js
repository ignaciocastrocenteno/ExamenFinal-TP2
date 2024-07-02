import TemperatureMemoryModels from "../User/temperature.memory.models.js";
import TemperatureFsModels from "../User/temperature.fs.models.js";

export default class ModelFactory {
  constructor() {}

  static get(type) {
    switch (type) {
      case "MEM":
        console.log("Persistiendo en la memoria del servidor!");
        return new TemperatureMemoryModels();
      case "FS":
        console.log("Persistiendo sobre FileSystem (FS)");
        return new TemperatureFsModels();

      default:
        console.log("Persistiendo en la memoria default (MEMORY)!");
        return new TemperatureMemoryModels();
    }
  }
}
