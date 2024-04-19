import Router from "./router.js";

//data
const users = [
  { id: 1, name: "Emiliano" },
  { id: 2, name: "Yanel" },
  { id: 3, name: "Gustavo" },
  { id: 4, name: "Cecilia" },
];

export default class UserRouter extends Router {
  init() {
    this.get("/users", this.getUsers);
    this.get("/users/:id", this.getUser);
    
  }
  //metodos
  async getUsers(req, res) {

    res.sendSuccess(users);
  }
  async getUser(req, res) {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id));
    res.sendSuccess({ payload: user });
  }
}
