const users = [];

class UserController {
  constructor() {
    console.log("Controlador de usuarios");
  }
  getAllUsers(req, res) {
    res.status(200).json({ status: "success", users });
  }

  createUser(req, res) {
    const newUser = req.body;
    users.push(newUser);

    res.status(201).json({ status: "success", newUser });
  }
}

//export default UserController;
export default new UserController();
