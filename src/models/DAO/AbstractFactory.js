import UserMemoryModels from "../User/user.memory.models.js";
import UserThirdPartyAPIModels from "../User/user.thirdpartyAPI.models.js";
import UserFsModels from "../User/user.fs.models.js";

export default class ModelFactory {
  constructor() {}

  static get(type) {
    switch (type) {
      case "MEM":
        console.log("Persistiendo en la memoria del servidor!");
        return new UserMemoryModels();
      case "THIRD_PARTY_API":
        console.log("Emulando persistencia en una REST API externa!");
        return new UserThirdPartyAPIModels();
      case "FS":
        console.log("Persistiendo sobre FileSystem (FS)");
        return new UserFsModels();
      /* case "MONGO_DB":
        console.log("Persistiendo en la memoria de MongoDB!");
        return new ProductsModelMongo();
      */

      default:
        console.log("Persistiendo en la memoria default (MEMORY)!");
        return new UserMemoryModels();
    }
  }
}
