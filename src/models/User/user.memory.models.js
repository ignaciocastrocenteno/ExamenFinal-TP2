export default class UsersModelsMemory {
  #idCounter;
  #users;
  constructor() {
    this.#idCounter = 0;
    this.#users = [
      {
        id: 0,
        nombre: "SYS_ADMIN",
      },
      /* {
        id: 1,
        nombre: "Juan Pérez",
      },
      {
        id: 2,
        nombre: "Fulano Gómez",
      },
      {
        id: 3,
        nombre: "Mengana Torres",
      },
      */
    ];
  }
  /**
   * Este método retorna un vector, conteniendo todos los usuarios existentes dentro de la memoria del servidor.
   * @returns Todos los usuarios disponibles del servidor.
   */
  getUsers = async () => {
    return this.#users;
  };

  /**
   * Este método busca a un usuario determinado dentro de la memoria del servidor, en base al ID que envió el
   * usuario. Si no existe un usuario con el ID especificado, se retornará un código HTTP 404 - Not Found
   * @param {number} id El ID del usuario buscado, que se recibe vía el endpoint {{id}}. El ID es un número entero mayor
   * a cero.
   * @returns {object} El usuario con el ID buscado (si existe).
   */
  getUserByID = async (id) => {
    const userFound = this.#users.find((user) => user.id == id);

    return userFound;
  };

  /**
   * Este método permite crear a un usuario dentro de la memoria del servidor. Cada nuevo usuario generado, recibirá
   * un UniqueIdentifier (ID), el cual identificará unívocamente al objeto, respecto de los demás objetos guardados en el
   * servidor. Los IDs generados no se repiten, aunque sus objetos de origen dejen de existir en memoria.
   * @param {object} userToAdd El usuario a ser almacenado en la memoria del servidor. Es un objeto que contiene toda la
   * información relacionada con dicho usuario.
   * @returns {object} La información ingresada por el usuario, para ser persistida (sólo si no hay errores)
   */
  createUser = async (userToAdd) => {
    const user = userToAdd;

    user["id"] = ++this.#idCounter;
    this.#users.push(user);

    return userToAdd;
  };

  /**
   * Este método permite actualizar completamente la información de un usuario, que ya existía previamente
   * en la memoria del servidor. La información anterior, será reemplazada por la información facilitada por el usuario.
   * @param {object} userToUpdate La nueva información relacionada a dicho usuario, la cual será persistida en memoria una vez
   * finalizada la ejecución de este método.
   * @param {number} id De tipo numérico (entero), será el ID utilizado para realizar la búsqueda de la información existente
   * del usuario en memoria.
   * @returns {object} El usuario ya actualizado con la nueva información, recibida como argumento.
   * @throws {Error} En caso de que el usuario que se busca actualizar, no exista dentro de la memoria del servidor.
   */
  updateUserByID = async (userToUpdate, id) => {
    const userIndex = this.#users.findIndex((user) => user.id == id);

    if (userIndex === -1) {
      throw new Error(
        "The user to update with the specified ID does not exist!"
      );
    }

    this.#users[userIndex] = {...userToUpdate, id: parseInt(id)};

    return this.#users[userIndex];
  };

  /**
   * Este método permite realizar una actualización parcial de la información relacionada con un usuario
   * que ya existía previamente en la memoria del servidor. La información anterior, será reemplazada parcialmente por la
   * información facilitada por el usuario, manteniendo aquellos datos que ya estaban guardados y sumando la nueva
   * información recibida como argumento.
   * @param {object} userToModify La nueva información relacionada a dicho usuario, la cual será persistida en memoria una vez
   * finalizada la ejecución de este método, en combinación con la información previa.
   * @param {number} id De tipo numérico (entero), será el ID utilizado para realizar la búsqueda de la información existente
   * del usuario en memoria.
   * @returns {object} El usuario ya actualizado con la nueva información, recibida como argumento; adicionalmente a la
   * información preexistente a la ejecución de este método.
   * @throws {Error} En caso de que el usuario que se busca modificar, no exista dentro de la memoria del servidor.
   */
  modifyUserByID = async (userToModify, id) => {
    const userIndex = this.#users.findIndex((user) => user.id == id);

    if (userIndex === -1) {
      throw new Error(
        "The user to modify with the specified ID does not exist!"
      );
    }

    if ("id" in userToModify) {
      throw new Error("The user ID can never be changed!");
    }

    const currentUser = this.#users[userIndex];
    this.#users[userIndex] = {...currentUser, ...userToModify};
    let result = this.#users[userIndex];

    return result;
  };

  /**
   * Este método permite remover un usuario, que existía previamente en la memoria del servidor, utilizando un ID
   * recibido como argumento para su búsqueda.
   * @param {number} id De tipo numérico (entero), será el ID utilizado para realizar la búsqueda del usuario en memoria
   * para, posteriormente, poder eliminarlo de la misma.
   * @returns {boolean}
   *  - `true` Si el objeto de tipo usuario con el ID especificado, logró se removido de la memoria del servidor
   * exitosamente.
   *  - `false` Si no se logró remover exitosamente de la memoria al usuario buscado, a razón de algún error o excepción.
   * @throws {Error} En caso de que el usuario que se busca eliminar, no exista dentro de la memoria del servidor.
   */
  removeUserByID = async (id) => {
    const userIndex = this.#users.findIndex((user) => user.id == id);

    if (userIndex === -1) {
      throw new Error(
        "The user to remove with the specified ID does not exist!"
      );
    }

    this.#users.splice(userIndex, 1);

    return true;
  };
}
