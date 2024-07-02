import fs from "fs";

export default class UsersModelsFs {
  constructor() {
    this.users = "src/models/Users/users.json";
  }

  getUsers = async () => {
    console.log("DATA: \n" + data);

    return data;
  };

  getUsersByID = async (id) => {
    const vanillaObj = JSON.parse(
      await fs.promises.readFile(this.users, "utf-8")
    );
    console.log(vanillaObj);
    const userFound = await vanillaObj.find((user) => user.id == id);
    console.log(userFound);

    return userFound;
  };

  createUser = async (user) => {
    const usersArr = JSON.parse(
      await fs.promises.readFile(this.users, "utf-8")
    );
    usersArr.push(user);
    const usersJSON = JSON.stringify(usersArr);
    await fs.promises.writeFile(this.users, usersJSON);

    return user;
  };
}
